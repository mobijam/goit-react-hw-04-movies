import React from 'react';
import PropTypes from 'prop-types';
import s from './Cast.module.css';

const ActorCard = ({ url, actorName, character }) => {
  return (
    <li className={s.castCard}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={url} alt={actorName} />
      </div>
      <p className={s.actor}>{actorName}</p>
      <p>{character}</p>
    </li>
  );
};

ActorCard.propTypes = {
  url: PropTypes.string,
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default ActorCard;
