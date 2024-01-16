import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState(""); // Represents the search term.
  const [location, setLocation] = useState(""); //  Represents the location for the search.
  const [option, setOption] = useState("best_match"); // Represents the selected sorting option.

  //Determines whether a sorting option is active or not
  const getSortByClass = (sortByOption) => {
    if (option === sortByOption) {
      return styles.active;
    }
    return "";
  };

  //Updates the selected sorting option.
  const handleSortByChange = (sortByOption) => {
    setOption(sortByOption);
  };

  //Update the state based on changes in the search term and location input fields.
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Triggers the searchYelp function with the provided search parameters.
  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(term, location, option);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={handleTermChange} />
          <input placeholder="Where?" onChange={handleLocationChange} />
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
