import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">RayFilm</Navbar.Brand>
        <Nav>
          <NavLink href="#trending">Trending</NavLink>
          <NavLink href="#hero">Hero</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
