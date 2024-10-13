import React, { useState } from 'react';
import axios from 'axios';
import { GoSearch } from 'react-icons/go';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]); // State to hold search results

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            // Make API call
            try {
                const response = await axios.get(`http://localhost:5000/api/items/search`, {
                    params: { q: query }
                });
                setResults(response.data); // Update results state with API response
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        }
    };

    return (
        <div>
            <div className="search me-5">
                <GoSearch style={{ margin: "0px 20px 0px 10px" }} />
                <input
                    type="search"
                    placeholder="Search for products, brands and more"
                    aria-label="Search"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <div className="results">
                {results.length > 0 ? (
                    results.map((item) => (
                        <div key={item._id} className="result-item">
                            <h3>{item.name}</h3>
                            {/* Add any additional item properties you want to display */}
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
