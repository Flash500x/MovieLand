import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2d3c830a";
const MovieCard = ({ title }) => {
  let [logger, setLog] = useState("Searching...");
  let [image, changeImage] = useState(null);
  let [currentTime, updateTime] = useState("00:00:00");
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
  };

  useEffect(() => {
    setInterval(() => {
      let dat = new Date();
      updateTime(dat.toLocaleTimeString());
    }, 1000);
    searchMovies(title);
  }, []);
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt="incomming" />
      <p>{currentTime}</p>
    </>
  );
};
export default MovieCard;
