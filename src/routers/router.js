import { Route, Switch } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import DetailPage from "../pages/detailPage";
import Homepage from "../pages/homepage";

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
      </Switch>
      <Footer />
    </>
  );
};

export default Routers;
