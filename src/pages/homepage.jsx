import React, { useEffect, useState } from "react";
import { Pagination, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";
import Card from "../components/card";
import { getGames } from "../store/action/games";

const Homepage = () => {
  const dispatch = useDispatch();
  const { games, gamesLoading } = useSelector(
    (state) => state?.games?.listGames
  );

  const [page, setPage] = useState(1);

  const firstPage = () => setPage(1);
  const previousPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  const lastPage = () => setPage(Math.floor(games?.count / 20 + 1));

  useEffect(() => {
    dispatch(getGames(page));
  }, [dispatch, page]);
  return (
    <div className="homepage">
      {gamesLoading ? (
        <div className="spinner-container">
          <div className="spinner">
            <Spinner animation="grow" variant="warning" />
          </div>
          <div className="spinner">
            <Spinner animation="grow" variant="warning" />
          </div>
          <div className="spinner">
            <Spinner animation="grow" variant="warning" />
          </div>
          <div className="spinner">
            <Spinner animation="grow" variant="warning" />
          </div>
          <div className="spinner">
            <Spinner animation="grow" variant="warning" />
          </div>
          <div className="spinner">
            <Spinner animation="grow" variant="warning" />
          </div>
        </div>
      ) : (
        <div className="card-outer-container">
          {games?.results?.map((item, index) => {
            return (
              <div key={index} className="card-container">
                <Link className="link" to={`/detail/${item.id}`}>
                  <Card
                    title={item.name}
                    rating={item.rating}
                    ratings_count={item.ratings_count}
                    genre={item.genres}
                    released={item.released}
                    background_image={item.background_image}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {games ? (
        <div className="pagination">
          <Pagination>
            {games.previous ? (
              <>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev onClick={previousPage} />
                <Pagination.Item onClick={previousPage}>
                  {page - 1}
                </Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{page}</Pagination.Item>
            {games.next ? (
              <>
                <Pagination.Item onClick={nextPage}>{page + 1}</Pagination.Item>
                <Pagination.Next onClick={nextPage} />
                <Pagination.Last onClick={lastPage} />
              </>
            ) : null}
          </Pagination>
        </div>
      ) : null}
    </div>
  );
};

export default Homepage;
