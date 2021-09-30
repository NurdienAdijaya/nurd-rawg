import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
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
    </div>
  );
};

export default Loading;
