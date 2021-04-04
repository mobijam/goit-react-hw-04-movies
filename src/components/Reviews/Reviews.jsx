import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import ReviewCard from './ReviewCard';
import s from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <Container>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => {
            return <ReviewCard key={id} nickName={author} text={content} />;
          })}
        </ul>
      ) : (
        <p className={s.notice}>We don't have any reviews for this movie</p>
      )}
    </Container>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Reviews;
