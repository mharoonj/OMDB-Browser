import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import styles from '@/styles/Recommend.module.css'

const inter = Inter({ subsets: ['latin'] })

interface DetailPageProps {
  data: {
    Title: string;
    Year: string;
    // Add additional properties based on your data structure
  };
}

const DetailPage: React.FC<DetailPageProps> = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
      <div style={{height: '100%', }}>
      <h1>{data.Title}</h1>
      <p>{data.Year}</p>
      {/* Render the detail content */}
    </div>
    </main>
  </>
  )

};

export async function getServerSideProps(context: any) {
  // Fetch data for the detail screen based on the context
  const { params } = context;
  const movieId = params.movieId;
  // Fetch the data using your preferred data fetching library or API calls

  const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=542fb3a3`).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}

export default DetailPage;
