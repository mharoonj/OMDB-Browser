import React from "react";
import { MovieCardInterface } from "../types/movie-types";
import styles from "./Card.module.css";
import Router from 'next/router'  

type CardProps = {
  infos: MovieCardInterface;
};

const Card = ({ infos }: CardProps) => {
  return (
    <div
      className={styles.movie}
      style={{ backgroundImage: `url(${infos.Poster})` }}
      onClick={() => Router.push(`/movies/${infos.imdbID}`)}
    >
      <h2 className={styles.movie__title}>{infos.Title}</h2>
      <span className={styles.movie__description}>Year - {infos.Year}</span>
    </div>
  );
};

export default Card;
