import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import s from './MovieCard.module.css';

const MovieCardList = ({ movieList, location }) => {
  return (
    <ul className={s.movieList}>
      {movieList.map(({ id, poster_path, title, release_date }) => {
        return (
          <MovieCard
            key={id}
            poster_url={poster_path}
            filmTitle={title}
            release_date={release_date}
            link={`/movies/${id}`}
            location={location}
          />
        );
      })}
    </ul>
  );
};

MovieCardList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default withRouter(MovieCardList);
