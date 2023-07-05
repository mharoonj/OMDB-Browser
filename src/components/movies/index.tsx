import React from "react";
import MoviesList from "./lists/MoviesList";
import SearchBar from "../searchbars/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";

type MovieSearchProps = {};

const MoviesSearch: React.FC<MovieSearchProps> = () => {
  const [searchVal, setSearchVal] = React.useState("hello");

  return (
    <div style={{ width: "100%" }}>
      <SearchBar searchVal={searchVal} setSearchVal={setSearchVal}/>
      <MoviesList />
      <ClipLoader
        color={"#ffffff"}
        loading={false}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default MoviesSearch;
