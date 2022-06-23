import React, { Component } from "react";
import Like from "./common/like";
import movies from "./model/movie";
import {Link} from 'react-router-dom'

class Movies extends Component {
  state = {
    movies: movies,
  };

  handleDelete = (movie) => {
    // Filter the movies except the one to delete
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    // update the state
    this.setState({ movies });
  };

  handleLiked = (movie) => {
    const index = this.state.movies.indexOf(movie);
    this.state.movies[index].liked = !this.state.movies[index].liked;
    this.setState({ movies: this.state.movies });
  };

  render() {
    return (
      <div>
        <h3>List of Movies</h3>
        <Link to="/movies/new" className="btn btn-primary">New Movies</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.movieRate}</td>
                <td>
                  <Like
                    onLike={() => this.handleLiked(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm m-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
