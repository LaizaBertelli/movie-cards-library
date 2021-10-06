// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(this.props);
    return <p>{movie.title}</p>;
  }
}

export default MovieCard;
