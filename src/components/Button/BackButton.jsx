import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as BackArrow } from './arrow-left.svg';
import s from './BackButton.module.css';

const BackButton = ({ onClick }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <BackArrow className={s.icon} />
      Go back
    </button>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func,
};

export default BackButton;
