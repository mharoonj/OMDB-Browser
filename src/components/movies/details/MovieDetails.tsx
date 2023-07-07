import Card from "../cards/Card";
import { MovieDetailInterface } from "../types/movie-types";
import styles from "./MovieDetails.module.css";
import imdbLogo from "../../../../public/logo-imdb.svg";
import clock from "../../../../public/clock.png";
import Image from "next/image";

type MovieDetailsProps = {
  data: MovieDetailInterface;
};
const MovieDetails: React.FC<MovieDetailsProps> = ({ data }) => {
  const DetailCard = ({ name, value }: { name: string; value: string }) => {
    return (
      <div className={styles.detail_card}>
        <div className={styles.heading}>{name}</div>
        <div className={styles.description}>{value}</div>
      </div>
    );
  };

  return (
    <div className="w-100">
      <div className={`inline-block ${styles.poster_container}`}>
        {/* Poster */}
        <Card infos={data} />
      </div>
      <div className={`inline-block ${styles.intro_right_section}`}>
        {/* Brief Intro */}
        <h2>{data.Title}</h2>
        <br></br>
        <h4>{data.Year}</h4>
        <h4>{data.Genre}</h4>
        <br></br>

        <div className={styles.row}>
          <div className={`${styles.intro_td1} ${styles.bold}`}>Rated</div>
          <div className={styles.intro_td2}>{data.Rated}</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.intro_td1} ${styles.bold}`}>Language</div>
          <div className={styles.intro_td2}>{data.Language}</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.intro_td1} ${styles.bold}`}>Country</div>
          <div className={styles.intro_td2}>{data.Country}</div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.intro_td1} ${styles.bold}`}>Box Office</div>
          <div className={styles.intro_td2}>{data.BoxOffice}</div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.row}>
          <div className={styles.intro_td1 + " m1"}>
            <Image src={imdbLogo} alt="imdb" />
          </div>
          <div className={styles.intro_td2}>{data.imdbRating}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.intro_td1}>
            <Image src={clock} alt="clock" width={25} height={25} />
          </div>
          <div className={styles.intro_td2 + " m4"}>{data.Runtime}</div>
        </div>
      </div>

      <div className="w-100 mt30">
        <hr></hr>
        <DetailCard name={"Director"} value={data.Director} />
        <DetailCard name={"Writer"} value={data.Writer} />
        <DetailCard name={"Actors"} value={data.Actors} />
        <DetailCard name={"Awards"} value={data.Awards} />
        <DetailCard name={"Plot"} value={data.Plot} />
      </div>
    </div>
  );
};

export default MovieDetails;
