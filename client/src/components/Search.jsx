import { GoSearch } from "react-icons/go";

const Search = ({ isMobile }) => {
  return (
    <div
      className={`${isMobile ? "search-container-mobile" : "search-container"}`}
    >
      <div className={`search ${isMobile ? "search-collapse" : ""}`}>
        <GoSearch size={24} className="search-icon" />
        <input
          type="search"
          placeholder={
            isMobile ? "Search" : "Search for products, brands and more"
          }
          className="search-input"
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default Search;
