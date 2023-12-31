import React, { useEffect } from "react";
import useSWR from "swr";
import MoviesList from "./lists/MoviesList";
import SearchBar from "../searchbars/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";
import config from "../../../config.json";

type MovieSearchProps = {};

const MoviesSearch: React.FC<MovieSearchProps> = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const { data, error, isLoading } = useSWR(
    `${config.SERVER_URI}/?apikey=${config.API_KEY}&s=${searchVal}&page=${page}`,
    fetcher
  );

  useEffect(() => {
    if (data && data.Search) {
      const newMovies = movies.concat(data.Search);
      setMovies(newMovies);
    } else {
    }
  }, [data?.Search]);

  useEffect(() => {
    // console.log("reset");
    setPage(1);
    movies.length !== 0 && setMovies([]);
  }, [searchVal]);

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div style={{ width: "100%" }}>
      <SearchBar setSearchVal={setSearchVal} />
      <MoviesList movies={movies} nextPage={nextPage} />
      {isLoading && (
        <ClipLoader
          color={"#ffffff"}
          loading={false}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};

// Fetcher function to fetch search results
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default MoviesSearch;
