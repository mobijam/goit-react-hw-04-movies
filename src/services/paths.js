export default {
  trendingMovie: '/trending/movie/day',
  searchMovie: '/search/movie',
  getDetails: id => `/movie/${id}`,
  getCredits: id => `/movie/${id}/credits`,
  getReviews: id => `/movie/${id}/reviews`,
};
