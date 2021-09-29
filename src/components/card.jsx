import React from "react";
import "../assets/styles/card.css";
import logo from "../assets/images/Nurd-icon-square.jpeg";

const Card = ({ ...props }) => {
  const {
    title = "title",
    rating = 4,
    ratings_count = 10869,
    genre = "genre",
    released = "released",
    background_image = logo,
  } = props;

  return (
    <div className="card">
      <img className="img" src={background_image} alt="" />
      <div className="content">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <div className="content-flex">
            <p>Release Date: </p>
            <p>{released}</p>
          </div>
          <div className="content-flex">
            <p>Rating:</p>
            <p>
              {rating} ({ratings_count})
            </p>
          </div>
          <div className="content-flex">
            <p>Genres: </p>
            <p>{genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
