import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function Footer() {
  return (
    <Navbar
      className="nav-bar position-relative bottom-0 start-0 w-100 p-3"
      style={{ backgroundColor: "#FCE38A" }}
    >
      <Container className="text-center pt-5 pb-5">
        <section className="footer">
          <h4>Contact Details</h4>
          <div>
            <img src="/imgs/telephone.png" className="footer-img" />
            <p>Phone: 123 456 789</p>
          </div>
          <div>
            <img src="/imgs/mail.png" className="footer-img" />
            <p>Email: cereal@gmail.com</p>
          </div>
          <div>
            <img src="/imgs/map.png" className="footer-img" />
            <p>Address: 10 Main Street, Melbourne, VIC</p>
          </div>
        </section>
      </Container>
    </Navbar>
  );
}
