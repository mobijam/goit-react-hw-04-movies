import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import movieAPI from '../services/searchMovieApi';
import paths from '../services/paths';
import routes from '../routes';
import MovieOverview from '../components/MovieOverview/MovieOverview';
import BackButton from '../components/Button/BackButton';

const Cast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "casts-page" */),
);
const Reviews = lazy(() =>
  import(
    '../components/Reviews/Reviews' /* webpackChunkName: "reviews-page" */
  ),
);

export default class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
    cast: null,
    reviews: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    movieAPI
      .getMovies(paths.getDetails(movieId))
      .then(data => this.setState({ movieDetails: data }));

    movieAPI
      .getMovies(paths.getCredits(movieId))
      .then(data => this.setState({ cast: data.cast }));

    movieAPI
      .getMovies(paths.getReviews(movieId))
      .then(data => this.setState({ reviews: data.results }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (
      location.state &&
      location.state.from &&
      location.state.from.state &&
      location.state.from.state.from
    ) {
      history.push(location.state.from.state.from);
    }

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetails, cast, reviews } = this.state;
    const { match } = this.props;

    return (
      <>
        <BackButton onClick={this.handleGoBack} />
        {movieDetails && (
          <MovieOverview
            movie={movieDetails}
            castLink={`${match.url}/credits`}
            reviewLink={`${match.url}/reviews`}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route
                path={`${match.path}/credits`}
                render={props => <Cast {...props} cast={cast} />}
              />
              <Route
                path={`${match.path}/reviews`}
                render={props => <Reviews {...props} reviews={reviews} />}
              />
            </Suspense>
          </MovieOverview>
        )}
      </>
    );
  }
}
