import React from 'react';
import Container from '../components/Container/Container';
import errorImg from './not_found.jpg';

const NotFoundPage = () => {
  return (
    <Container>
      <img src={errorImg} alt="Page not found" />
    </Container>
  );
};

export default NotFoundPage;
