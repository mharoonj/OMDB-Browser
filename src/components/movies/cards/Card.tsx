import React from "react";
import { MovieCardInterface } from "../types/movie-types";
import styles from "./Card.module.css";

type NavBarProps = {};

const Card = ({ infos }: { infos: MovieCardInterface }) => {
  const Rating = ({ rating }: { rating: any }) => {
    let stars = [];
    for (let i = 1; i < 11; i++) {
      let klass = "fa fa-star";
      if (rating >= i && rating !== null) {
        klass = "fa fa-star checked";
      }
      stars.push(
        <i
          style={{ direction: i % 2 === 0 ? "rtl" : "ltr" }}
          className={klass}
        />
      );
    }
    return <div className="movie__rating">{stars}</div>;
  };

  const MovieInfo = ({ name, value }: { name: String; value: String }) => {
    const dynamicClassName = `movie__${name}`;

    return (
      <div className={styles[dynamicClassName]}>
        <span className="info__head">
          {name.replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
        {value}
      </div>
    );
  };

  return (
    <div
      className={styles.movie}
      style={{ backgroundImage: `url(${infos.Poster})` }}
    >
      <h2 className={styles.movie__title}>{infos.Title}</h2>

      <span className={styles.movie__description}>Year - {infos.Year}</span>

      {/* <div className={styles.movie__infos}>
        <MovieInfo name="duration" value={infos.duration} />
        <MovieInfo name="director" value={infos.director} />
        <MovieInfo name="year" value={infos.year} />
      </div> */}

      {/* <div className={styles.movie__imdb}>
        <Rating rating={Math.round(infos.rating)} />
        <a
          href={infos.imdbLink}
          className={styles.movie__imdb_button}
          target="blank"
        >
          {" "}
          IMDb{" "}
        </a>
      </div> */}
    </div>
  );
};

// const Card: React.FC<NavBarProps> = () => {
//     return <div style={{background: 'yellow', minHeight: '50vh' }}>
//         I am card
//     </div>
// }

export default Card;
