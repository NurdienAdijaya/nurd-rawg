import { Route, Switch } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import DetailPage from "../pages/detailPage";
import GenresPage from "../pages/genresPage";
import Homepage from "../pages/homepage";
import SearchGenre from "../pages/searchGenre";

const Routers = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/detail/:id">
          <DetailPage />
        </Route>
        <Route exact path="/genres">
          <GenresPage />
        </Route>
        <Route exact path="/games/:genre">
          <SearchGenre />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Routers;
