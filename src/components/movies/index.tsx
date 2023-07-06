import React, { useEffect } from "react";
import useSWR from 'swr';
import MoviesList from "./lists/MoviesList";
import SearchBar from "../searchbars/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";

type MovieSearchProps = {};

const MoviesSearch: React.FC<MovieSearchProps> = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const [ page, setPage ] = React.useState(1);
  const [ movies, setMovies ] = React.useState([]);
  const { data, error } = useSWR(`https://www.omdbapi.com/?apikey=542fb3a3&s=${searchVal}&page=${page}`, fetcher);

  useEffect(() => {

    if(data && data.Search){
        const newMovies = movies.concat(data.Search)
        setMovies(newMovies)
        console.log("new movies : ", newMovies)

    }else{
        console.log("invalid data : ", data)
    }
 
  }, [data?.Search])

  useEffect(() => {
    console.log("reset")
    setPage(1)
    movies.length !==0 && setMovies([])
  }, [searchVal])

  const nextPage = () => {
    setPage(page +1)
  }
//   console.log("data :", data);
  console.log("movies :", movies);
//   console.log("data :", searchVal);
  
  return (
    <div style={{ width: "100%" }}>
      <SearchBar searchVal={searchVal} setSearchVal={setSearchVal}/>
      <MoviesList movies={movies} nextPage={nextPage} />
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

// Fetcher function to fetch search results
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default MoviesSearch;
