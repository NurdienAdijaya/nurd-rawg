import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  // NavDropdown,
} from "react-bootstrap";
import "../assets/styles/header.css";
import logo from "../assets/images/RxN.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { clearSearch, searchGames } from "../store/action/games";
import { useLocation } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchAll = (e) => {
    if (e.target.value) {
      dispatch(searchGames(1, e.target.value));
    } else {
      dispatch(clearSearch());
    }
  };

  const debounce = (func, timeout = 400) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const debounceSearch = debounce((e) => searchAll(e));
  return (
    <div>
      <Navbar className="header" bg="" variant="dark" expand="md">
        <Container fluid>
          <a href="/">
            <Navbar.Brand>
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </a>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/genres">Genres</Nav.Link>
              <Nav.Link href="/platforms">Platforms</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="d-flex justify-content-center">
              {location.pathname === "/" ? (
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 search-input"
                  aria-label="Search"
                  onChange={(e) => debounceSearch(e)}
                />
              ) : null}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
