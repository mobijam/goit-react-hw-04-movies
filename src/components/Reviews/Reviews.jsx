import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import ReviewCard from './ReviewCard';
import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6c7781b0f98c14eaccac45c35d13f730`,
    );

    this.setState({ ...response.data });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { results } = this.state;
    return (
      <Container>
        {results.length ? (
          <ul className={s.list}>
            {this.state.results.map(({ id, author, content }) => {
              return <ReviewCard key={id} nickName={author} text={content} />;
            })}
          </ul>
        ) : (
          <p className={s.notice}>We don't have any reviews for this movie</p>
        )}
      </Container>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Reviews;
