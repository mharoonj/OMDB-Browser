import React from "react";
import Card from "./Card";
import MoviesList from "./MoviesList";
import SearchBar from "./SearchBar";

type MovieSearchProps = {};

const MoviesSearch: React.FC<MovieSearchProps> = () => {
  return <div>
    <SearchBar />
    <MoviesList />
  </div>;
};

export default MoviesSearch;
