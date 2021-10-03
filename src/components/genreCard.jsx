import "../assets/styles/genreCard.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const GenreCard = ({ ...props }) => {
  const { image_background, name, games_count, games, slug } = props;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, #3a506b),url("${image_background}")`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        borderRadius: "0.625rem",
        height: "15.25rem",
        width: "18.625rem",
      }}
    >
      <div className="genre-container">
        <div className="genre-container-1">
          <Link to={`/genre/${slug}`} className="link">
            <div className="genre-title">
              <h3>{name}</h3>
            </div>
          </Link>
          <div className="genre-total-games">
            <h6>Total games</h6>
            <p>{games_count}</p>
          </div>
          <div className="genre-popular-games">
            <h6>Popular games</h6>
            {games?.map((item, index) => {
              return (
                index < 3 && (
                  <div className="title-popular-games" key="index">
                    <Link to={`/detail/${item.id}`} className="link">
                      <p className="title-games">{item.name}</p>
                    </Link>
                    <div className="total-popular-games">
                      <p>{item.added} </p>
                      <BsFillPeopleFill />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
