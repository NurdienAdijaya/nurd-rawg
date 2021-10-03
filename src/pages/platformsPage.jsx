import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenreCard from "../components/genreCard";
import Loading from "../components/loading";
import "../assets/styles/genresPage.css";
import { getPlatform } from "../store/action/platform";

const PLatformPage = () => {
  const dispatch = useDispatch();
  const { platformName, platformLoading } = useSelector(
    (state) => state?.platform?.listPlatform
  );

  useEffect(() => {
    dispatch(getPlatform());
  }, [dispatch]);

  console.log("genres", platformName);
  return (
    <div className="genres-page">
      {platformLoading ? (
        <Loading />
      ) : (
        <>
          <div className="genres-page-title">
            <h2>Platform List</h2>
          </div>
          <div className="card-outer-container">
            {platformName?.results?.map((item, index) => {
              return (
                <div key={index} className="card-container">
                  <GenreCard
                    image_background={item.image_background}
                    name={item.name}
                    games_count={item.games_count}
                    games={item.games}
                    slug={item.id}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PLatformPage;
