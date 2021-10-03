import React, { useEffect, useState } from "react";
import { Carousel, Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";
import Card from "../components/card";
import Loading from "../components/loading";
import { getGames, getRated } from "../store/action/games";
import logo from "../assets/images/RxN.png";

const Homepage = () => {
  const dispatch = useDispatch();
  const { games, gamesLoading } = useSelector(
    (state) => state?.games?.listGames
  );
  const { search, gamesLoading: searchLoading } = useSelector(
    (state) => state?.games?.listSearch
  );
  const { rated, ratedLoading } = useSelector(
    (state) => state?.games?.listRated
  );
  const resultList = games?.results?.length;
  const [page, setPage] = useState(1);
  const lastPageCount =
    games?.count % resultList === 0
      ? Math.floor(games?.count / resultList)
      : Math.floor(games?.count / resultList + 1);

  const firstPage = () => setPage(1);
  const previousPage = () => setPage(page - 1);
  const previous2Page = () => setPage(page - 2);
  const nextPage = () => setPage(page + 1);
  const next2Page = () => setPage(page + 2);
  const lastPage = () => setPage(lastPageCount);

  useEffect(() => {
    dispatch(getGames(page));
  }, [dispatch, page]);
  useEffect(() => {
    dispatch(getRated());
  }, [dispatch]);

  return (
    <div className="homepage">
      {gamesLoading || ratedLoading || searchLoading ? (
        <Loading />
      ) : searchLoading ? (
        <Loading />
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
            {rated?.results?.map((item, index) => {
              return (
                <Carousel.Item interval={1800}>
                  <Link to={`/detail/${item.id}`}>
                    <img
                      className="d-block w-100 image-carousel"
                      src={item.background_image ? item.background_image : logo}
                      alt={`${index + 1} Slide`}
                    />
                    <Carousel.Caption>
                      <div className="carousel-content">
                        <h4>{item.name}</h4>
                        <div className="platform-container">
                          {item?.platforms.map((platforms, index) => {
                            return (
                              <Link to={`/platform/${platforms.platform.id}`}>
                                <p className="platform" key={index}>
                                  {item?.platforms?.length - 1 === index
                                    ? platforms.platform.name
                                    : `${platforms.platform.name}, `}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="container-card">
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
          </div>
          {games ? (
            <div className="pagination">
              <Pagination>
                {games.previous ? (
                  <>
                    <Pagination.First onClick={firstPage} />
                    {page > 2 ? (
                      <Pagination.Prev onClick={previous2Page} />
                    ) : null}
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
                    {page < lastPageCount - 1 ? (
                      <Pagination.Next onClick={next2Page} />
                    ) : null}
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
