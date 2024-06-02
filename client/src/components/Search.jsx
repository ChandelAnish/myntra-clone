import { GoSearch } from "react-icons/go";

const Search = () => {
    return (
            <div className="search me-5">
            <GoSearch style={{margin:"0px 20px 0px 10px"}}/>
                <input type="search" placeholder="Search for products, brands and more" aria-label="Search" />
            </div>
    )
}

export default Search;