import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useShoppingCart } from "./Context/ShoppingCartContext";

export function Navbar1() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar sticky="top" variant="light" className="navbar1">
      <Container>
        <Nav>
          <Navbar.Brand href="/" className="brand bounce">
            CEREALS
          </Navbar.Brand>
        </Nav>
        <Nav className="ms-auto p-2 align-items-baseline">
          <Nav.Link className="me-3" href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link className="me-3 ms-3" href="/About">
            About
          </Nav.Link>
        </Nav>

        <Button
          onClick={openCart}
          variant="outline-dark"
          className="rounded-circle cart-circle-big "
        >
          <img src="/imgs/cart-1.svg" className="cart-img"></img>

          <div className="cart-circle-small rounded-circle d-flex justify-content-center align-items-center">
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}
