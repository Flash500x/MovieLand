import React from "react";
import "./app.css";
import { useEffect } from "react";
import searchIcon from "./search.svg";
import { useState } from "react";
import Movie from "./Movie";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d3c830a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search);
    console.log(movies);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src={searchIcon}
            alt="Search"
            onClick={() => {
              searchMovies(searchTerm);
            }}
          />
        </div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map((mov) => {
              return <Movie movie={mov} />;
            })}
          </div>
        ) : (
          <div className="empty">
        \  <h2>no movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
