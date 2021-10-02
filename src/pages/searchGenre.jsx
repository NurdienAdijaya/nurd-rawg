import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";
import Card from "../components/card";
import Loading from "../components/loading";
import { getGamesByGenre } from "../store/action/games";
import { useParams } from "react-router";

const SearchGenre = () => {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const { gamesByGenre, gamesByGenreLoading } = useSelector(
    (state) => state?.games?.GamesByGenre
  );
  const resultList = gamesByGenre?.results?.length;
  const [page, setPage] = useState(1);

  const firstPage = () => setPage(1);
  const previousPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  //   const lastPage = () =>
  //     setPage(
  //       gamesByGenre?.count % resultList === 0
  //         ? Math.floor(gamesByGenre?.count / resultList)
  //         : Math.floor(gamesByGenre?.count / resultList + 1)
  //     );
  // !bug on API, if searching genre and page >500 the result is invalid
  const lastPage = () =>
    setPage(
      gamesByGenre?.count > 10000
        ? 500
        : gamesByGenre?.count % resultList === 0
        ? Math.floor(gamesByGenre?.count / resultList)
        : Math.floor(gamesByGenre?.count / resultList + 1)
    );

  useEffect(() => {
    dispatch(getGamesByGenre(page, genre));
  }, [dispatch, page, genre]);

  return (
    <div className="homepage">
      {gamesByGenreLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="first-title">
            <h6>Showing all result for </h6>
            <h5>“{genre}”</h5>
          </div>
          <div className="card-outer-container">
            {gamesByGenre?.results?.map((item, index) => {
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
      )}
      {gamesByGenre ? (
        <div className="pagination">
          <Pagination>
            {gamesByGenre.previous ? (
              <>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev onClick={previousPage} />
                <Pagination.Item onClick={previousPage}>
                  {page - 1}
                </Pagination.Item>
              </>
            ) : null}
            <Pagination.Item active>{page}</Pagination.Item>
            {page < 500 ? (
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

export default SearchGenre;
