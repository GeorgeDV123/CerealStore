import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../Componets/StoreItem";
import storeItems from "../data/Data.json";

export function Home() {
  return (
    <>
      {/* Header */}
      <header className="home-box">
        <h5 className="text-muted">The best way to start your morning</h5>
        <h1 className="big">Stocking only the finest, high quality cereals</h1>
        <Button size="lg" className="home-btn" href="/store">
          To Store
        </Button>
      </header>

      <div className="home-img" role={'img'} aria-label="Bowls of cereal"></div>

      {/* Featured Cereals */}
      <section>
        <Container>
          <span className="h-box">
            <h2 className="h-text">Featured Today</h2>
          </span>
          <div className="featured">
            <div className="d-flex align-items-center">
              <Row md={3} xs={3} lg={4} className="g-5 w-100 feature">
                {storeItems.slice(2, 5).map((item) => (
                  <Col key={item.id} className="store-card-feat">
                    <StoreItem {...item} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
