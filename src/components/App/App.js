import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import business from "./BussinesData";

const businesses = [business, business, business, business, business, business];

const App = () => {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };

  return (
    <div className={styles.App}>
      <h1>Local Places</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
