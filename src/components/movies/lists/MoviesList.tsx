import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../cards/Card";
import { MovieCardInterface } from "../types/movie-types";

const infos: any = {
  poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  title: "poster",
  description: "poster",
  duration: "poster",
  director: "poster",
  year: "poster",
  rating: "poster",
  imbdLink: "poster",
};

// {
//   "Title": "The Avengers",
//   "Year": "2012",
//   "imdbID": "tt0848228",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// },

type MoviesListProps = {
  movies: MovieCardInterface[],
  nextPage: Function
};

const MoviesList: React.FC<MoviesListProps> = ({movies, nextPage}) => {
  const fetchMoreData = () => {
    console.log("FETCHING MORE ........................")
    nextPage()
  };

  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<div><h4>Loading...</h4></div>}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {movies.map((infos, index) => (
          <Card key={infos.Title + index} infos={infos} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MoviesList;
