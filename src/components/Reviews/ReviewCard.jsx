import React from 'react';
import PropTypes from 'prop-types';
import s from './Reviews.module.css';

const ReviewCard = ({ nickName, text }) => {
  return (
    <li className={s.item}>
      <span className={s.author}>{nickName}</span>
      <p
        className={s.content}
        onClick={({ target }) => target.classList.remove(`${s.content}`)}
      >
        {text}
      </p>
    </li>
  );
};

ReviewCard.propTypes = {
  nickName: PropTypes.string,
  text: PropTypes.string,
};

export default ReviewCard;
