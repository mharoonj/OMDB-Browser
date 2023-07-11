import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Recommend.module.css";
import MoviesList from "../components/movies/lists/MoviesList";
import config from "../../config.json";
import { MovieCardInterface } from "@/components/movies/types/movie-types";

const inter = Inter({ subsets: ["latin"] });

interface MovieRecommendationsProps {
  recommendedMovies: MovieCardInterface[];
}

const Recommend: React.FC<MovieRecommendationsProps> = ({
  recommendedMovies,
}) => {
  return (
    <>
      <Head>
        <title>OMDB Browser - Recommendations</title>
        <meta name="description" content="Get movie recommendations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* update with recommendations page code */}
        <MoviesList movies={recommendedMovies} nextPage={() => {}} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const recommendations = await fetcher(
    `${config.TMDB_SERVER_URI}/3/movie/popular?language=en-US&page=1&api_key=${config.TMDB_API_KEY}`
  );
  const { results } = recommendations;
  let recommendedMovies: MovieCardInterface[] = [];
  for (const movie of results.slice(0, 10)) {
    const result = await fetcher(
      `${config.SERVER_URI}/?apikey=${config.API_KEY}&s=${movie.title}&page=1`
    );

    if (result.Search) {
      recommendedMovies.push(result.Search[0]);
    }
  }

  return {
    props: {
      recommendedMovies,
    },
    revalidate: 86400, // Refresh every 24 hours (in seconds)
  };
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default Recommend;
