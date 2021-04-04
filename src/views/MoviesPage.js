import React, { Component } from 'react';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import movieAPI from '../services/searchMovieApi';
import paths from '../services/paths';
import Container from '../components/Container/Container';
import Searchbar from '../components/Searchbar/Searchbar';
import MovieCardList from '../components/MovieCard/MovieCardList';

export default class MoviesPage extends Component {
  state = {
    searchMovies: [],
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);

    if (query) {
      this.getSearchMovie(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: currentQuery } = queryString.parse(
      this.props.location.search,
    );
    const { query: prevQuery } = queryString.parse(prevProps.location.search);

    if (prevQuery !== currentQuery) {
      this.getSearchMovie(currentQuery);
    }
  }

  getSearchMovie = searchMovie => {
    movieAPI
      .getMovies(paths.searchMovie, { query: searchMovie })
      .then(({ results }) => {
        if (results.length === 0) {
          return toast.error('Bad search query :( We have no movies for you');
        }

        this.setState({ searchMovies: results });
      });
  };

  handleFormSubmit = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { searchMovies, searchQuery } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <MovieCardList movieList={searchMovies} query={searchQuery} />
      </Container>
    );
  }
}
