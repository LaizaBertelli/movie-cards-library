// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropType from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
