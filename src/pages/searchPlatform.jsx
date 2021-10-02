import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/homepage.css";
import Card from "../components/card";
import Loading from "../components/loading";
import { getGamesByPlatform } from "../store/action/games";
import { useParams } from "react-router";
import { getPlatform } from "../store/action/platform";

const SearchPlatform = () => {
  const { platform } = useParams();
  const dispatch = useDispatch();
  const { gamesByPlatform, gamesByPlatformLoading } = useSelector(
    (state) => state?.games?.GamesByPlatform
  );
  const { platformName } = useSelector(
    (state) => state?.platform?.listPlatform
  );

  const resultList = gamesByPlatform?.results?.length;
  const [page, setPage] = useState(1);

  const firstPage = () => setPage(1);
  const previousPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  //   const lastPage = () =>
  //     setPage(
  //       gamesByPlatform?.count % resultList === 0
  //         ? Math.floor(gamesByPlatform?.count / resultList)
  //         : Math.floor(gamesByPlatform?.count / resultList + 1)
  //     );
  // !bug on API, if searching platform and page >500 the result is invalid
  const lastPage = () =>
    setPage(
      gamesByPlatform?.count > 10000
        ? 500
        : gamesByPlatform?.count % resultList === 0
        ? Math.floor(gamesByPlatform?.count / resultList)
        : Math.floor(gamesByPlatform?.count / resultList + 1)
    );

  useEffect(() => {
    dispatch(getGamesByPlatform(page, platform));
  }, [dispatch, page, platform]);
  useEffect(() => {
    dispatch(getPlatform(platform));
  }, [dispatch, platform]);

  return (
    <div className="homepage">
      {gamesByPlatformLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="first-title">
            <h6>Showing all result for </h6>
            <h5>“{platformName?.name}”</h5>
          </div>
          <div className="card-outer-container">
            {gamesByPlatform?.results?.map((item, index) => {
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
      {gamesByPlatform ? (
        <div className="pagination">
          <Pagination>
            {gamesByPlatform.previous ? (
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

export default SearchPlatform;
