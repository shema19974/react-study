import "./App.css";
import NavBar from "./components/navbar";
import {Routes, Route} from "react-router-dom";
import Movies from "./components/movies";
import RegisterUser from "./components/register";
import Login from "./components/Login";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails";
import MovieForm from "./components/newMovie";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/register' element={<RegisterUser/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<MovieDetails/>}/>
          <Route path='/movies/new' element={<MovieForm/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/rentals' element={<Rentals/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
