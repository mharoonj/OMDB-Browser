import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../cards/Card";

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

type MoviesListProps = {};

const MoviesList: React.FC<MoviesListProps> = () => {
  const [state, setState] = useState({
    items: Array.from({ length: 20 }),
  });

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setState({
        items: state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  };

  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {state.items.map((i, index) => (
          <Card key={index} infos={infos} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MoviesList;
