import React, { Component } from 'react';
import axios from 'axios';
import ActorCard from './ActorCard';
import PropTypes from 'prop-types';
import s from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6c7781b0f98c14eaccac45c35d13f730`,
    );

    this.setState({ ...response.data });
  }
  render() {
    const { cast } = this.state;
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
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Cast;
