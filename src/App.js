import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
