import React, { useCallback } from "react";
import debounce from 'lodash.debounce';
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  searchVal: string;
  setSearchVal: Function;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchVal, setSearchVal }) => {
  console.log(searchVal, setSearchVal)
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };
  const debouncedChangeHandler = useCallback(
    debounce(handleInput, 800)
  , []);
  const handleClearBtn = () => {
    setSearchVal("");
  };

  return (
    <div>
      <div className={styles.inputWrap}>
        <FaSearch className={styles.searchIcon} />

        <input
          onChange={debouncedChangeHandler}
        //   value={searchVal}
          type="text"
          name="search"
          id="search"
          placeholder="Search Movies"
        />
      </div>
    </div>
  );
};

export default SearchBar;
