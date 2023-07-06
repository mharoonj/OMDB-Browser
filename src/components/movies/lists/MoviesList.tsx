import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../cards/Card";
import { MovieCardInterface } from "../types/movie-types";

type MoviesListProps = {
  movies: MovieCardInterface[];
  nextPage: Function;
};

const MoviesList: React.FC<MoviesListProps> = ({ movies, nextPage }) => {
  const fetchMoreData = () => {
    nextPage();
  };

  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={true}
        loader={
          <div>
            <h4>Loading...</h4>
          </div>
        }
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
