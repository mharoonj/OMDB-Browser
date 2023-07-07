import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { Inter } from "next/font/google";
import styles from "@/styles/Recommend.module.css";
import { MovieDetailInterface } from "@/components/movies/types/movie-types";
import MovieDetails from "@/components/movies/details/MovieDetails";
import config from "../../../config.json";
const inter = Inter({ subsets: ["latin"] });

interface DetailPageProps {
  data: MovieDetailInterface;
  error: boolean;
}

const DetailPage: React.FC<DetailPageProps> = ({ data, error }) => {
  const router = useRouter();

  useEffect(() => {
    error && toast.error("Movie not found", {
        toastId: 'no_detail_error',
    });
  }, [error])

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>OMDB Browser - Movie Detail</title>
        <meta name="description" content="Get Movie Details" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* update with recommendations page code */}
        {!error && <MovieDetails data={data} />}
      </main>
    </>
  );
};

export async function getServerSideProps(context: any) {
  // Fetch data for the detail screen based on the context
  const { params } = context;
  const movieId = params.movieId;
  let error = false;
  // Fetch the data using your preferred data fetching library or API calls

  const data = await fetch(
    `${config.SERVER_URI}/?apikey=${config.API_KEY}&i=${movieId}&plot=full`
  ).then((res) => res.json());

  if (data.Response && data.Response === "False") {
    error = true;
  }

  return {
    props: {
      data,
      error,
    },
  };
}

export default React.memo(DetailPage);
