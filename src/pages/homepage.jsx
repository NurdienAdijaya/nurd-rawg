import React, { useEffect, useState } from "react";
import { Carousel, Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";
import Card from "../components/card";
import Loading from "../components/loading";
import { getGames } from "../store/action/games";

const Homepage = () => {
  const dispatch = useDispatch();
  const { games, gamesLoading } = useSelector(
    (state) => state?.games?.listGames
  );
  const { search, gamesLoading: searchLoading } = useSelector(
    (state) => state?.games?.listSearch
  );

  const resultList = games?.results?.length;
  const [page, setPage] = useState(1);

  const firstPage = () => setPage(1);
  const previousPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  const lastPage = () =>
    setPage(
      games?.count % resultList === 0
        ? Math.floor(games?.count / resultList)
        : Math.floor(games?.count / resultList + 1)
    );

  useEffect(() => {
    dispatch(getGames(page));
  }, [dispatch, page]);

  return (
    <div className="homepage">
      {gamesLoading ? (
        <Loading />
      ) : searchLoading ? (
        "Loading Search"
      ) : search?.results && search?.results.length ? (
        <div className="card-outer-container">
          {search?.results?.map((item, index) => {
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
                    setpages={firstPage}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <Carousel fade>
            {games?.results?.map((item, index) => {
              return (
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100 image-carousel"
                    src={item.background_image}
                    alt={`${index + 1} Slide`}
                  />
                  <Carousel.Caption>
                    <h3>{`${index + 1} Slide label`}</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
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
                      setpages={firstPage}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
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
                    <Pagination.Item onClick={nextPage}>
                      {page + 1}
                    </Pagination.Item>
                    <Pagination.Next onClick={nextPage} />
                    <Pagination.Last onClick={lastPage} />
                  </>
                ) : null}
              </Pagination>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Homepage;
