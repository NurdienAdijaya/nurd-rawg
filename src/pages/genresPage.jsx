import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenreCard from "../components/genreCard";
import Loading from "../components/loading";
import { getGenres } from "../store/action/genres";
import "../assets/styles/genresPage.css";

const GenresPage = () => {
  const dispatch = useDispatch();
  const { genres, genresLoading } = useSelector(
    (state) => state?.genres?.listGenres
  );

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  console.log("genres", genres);
  return (
    <div className="genres-page">
      {genresLoading ? (
        <Loading />
      ) : (
        <div className="card-outer-container">
          {genres?.results?.map((item, index) => {
            return (
              <div key={index} className="card-container">
                <GenreCard
                  image_background={item.image_background}
                  name={item.name}
                  games_count={item.games_count}
                  games={item.games}
                  slug={item.slug}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GenresPage;