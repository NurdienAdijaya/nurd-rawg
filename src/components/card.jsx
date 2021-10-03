import React from "react";
import "../assets/styles/card.css";
import logo from "../assets/images/RxN.png";
import { Link } from "react-router-dom";

const Card = ({ ...props }) => {
  const {
    title,
    rating,
    ratings_count,
    genre,
    released,
    background_image = logo,
    setpages,
  } = props;

  return (
    <div className="card">
      <img className="img" src={background_image} alt="" />
      <div className="content">
        <div className="card-title">
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
            <div className="genre">
              {genre.map((item, index) => {
                return (
                  <Link onClick={setpages} to={`/genre/${item.slug}`}>
                    <p className="genre-list" key={index}>
                      {genre.length - 1 === index
                        ? item.name
                        : `${item.name}, `}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
