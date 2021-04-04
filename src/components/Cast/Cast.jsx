import React from 'react';
import ActorCard from './ActorCard';
import PropTypes from 'prop-types';
import s from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    cast && (
      <ul className={s.castList}>
        {cast
          .map(({ id, name, character, profile_path }) => {
            const SRC = profile_path
              ? `https://image.tmdb.org/t/p/w300/${profile_path}`
              : 'https://us.123rf.com/450wm/2nix/2nix1408/2nix140800098/30818271-anonymous-avatar-profile-icon-vector-.jpg?ver=6';

            return (
              <ActorCard
                key={id}
                url={SRC}
                actorName={name}
                character={character}
              />
            );
          })
          .slice(0, 12)}
      </ul>
    )
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Cast;
