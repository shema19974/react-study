import React from "react";
import { useParams } from "react-router-dom";
import movies from "./model/movie";
import {Link} from 'react-router-dom'

const MovieDetails = () => {
  const params = useParams();
  const movie = movies.filter((movie) => movie._id === parseInt(params.id));
  return (
    <div>
      <div>Id: {movie[0]._id}</div>
      <div>Title: {movie[0].title}</div>
      <div>Genre: {movie[0].genre.name}</div>
      <div>Number of Stock: {movie[0].numberInStock}</div>
      <div>Rate: {movie[0].movieRate}</div>
      <Link to="/movies" className="btn btn-secondary btn-sm mt-3">Back To Movies</Link>
    </div>

  );
};

export default MovieDetails;
