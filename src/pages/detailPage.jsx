import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../assets/styles/detailPage.css";
import { getGamesDetail } from "../store/action/games";
import logo from "../assets/images/RxN.png";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detail, detailLoading } = useSelector(
    (state) => state?.games?.gameDetail
  );

  const background = detail?.background_image ? detail?.background_image : logo;

  useEffect(() => {
    dispatch(getGamesDetail(id));
  }, [dispatch, id]);

  const meta = detail?.metacritic;

  const metaColor =
    meta > 89
      ? "#66FF00	"
      : meta > 79
      ? "#03C03C"
      : meta > 69
      ? "#DFFF00"
      : meta > 59
      ? "#FFFF00"
      : meta > 49
      ? "#FFBF00"
      : meta > 39
      ? "#FF7F00"
      : meta > 29
      ? "red"
      : "#B31B1B";
  return (
    <>
      <div
        className="detail"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundImage: `linear-gradient(to bottom, transparent, #0b101f),url("${background}")`,
        }}
      >
        <div className="detail-container">
          {detailLoading ? (
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
            <div>
              <h1>{detail?.name}</h1>
              <div className="sub-container">
                <h6>Platforms</h6>
                <div className="platform-container">
                  {detail?.platforms?.map((item, index) => {
                    return (
                      <Link to={`/platform/${item.platform.id}`}>
                        <p className="platform" key={index}>
                          {detail?.platforms?.length - 1 === index
                            ? item.platform.name
                            : `${item.platform.name}, `}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="sub-container">
                <h6>Genres</h6>
                <div className="platform-container">
                  {detail?.genres?.map((item, index) => {
                    return (
                      <Link to={`/genre/${item.slug}`}>
                        <p className="platform" key={index}>
                          {detail?.genres?.length - 1 === index
                            ? item.name
                            : `${item.name}, `}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="sub-container">
                <h6>Release date</h6>
                <p>{detail?.released}</p>
              </div>
              <div className="sub-container">
                <h6>Metascore</h6>
                <div
                  style={{
                    marginTop: "0.4rem",
                  }}
                >
                  {meta ? (
                    <p
                      style={{
                        color: metaColor,
                        border: `${metaColor} solid 0.125rem`,
                        width: "2.5rem",
                        borderRadius: "1rem",
                        textAlign: "center",
                      }}
                    >
                      {meta}
                    </p>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
              <div className="sub-container">
                <h6>Website</h6>
                {detail?.website ? (
                  <a href={detail?.website} target="_blank" rel="noreferrer">
                    {detail?.name}
                  </a>
                ) : (
                  "-"
                )}
              </div>
              <div className="sub-container">
                <h6>Description</h6>
                <p>{detail?.description_raw}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
