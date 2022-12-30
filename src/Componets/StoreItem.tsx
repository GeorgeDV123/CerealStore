import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Image, Form } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency, formatNutrient } from "./formatCurrency";
import Modal from "react-bootstrap/Modal";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  upc: string;
}

export function StoreItem({ id, name, price, imgUrl, upc }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="h-100 store-card" onClick={handleShow}>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="100%"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
            <span className="fs-2">{name}</span>
          </Card.Title>
          <Card.Subtitle>
            <span className="text-muted">{formatCurrency(price)} each</span>
            <span className="text-muted float-end">{quantity} in cart</span>
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="d-flex align-items-end">
            <Col lg={3}>
              <Image src={imgUrl} className="imgF"></Image>
            </Col>
            <Col lg={3}>
              <span>
                <b>All nutrition is per serving:</b>
              </span>
            </Col>
            <Col lg={6}>
              <span className="shop-text ">
                <br />
                <br />
                One of our best cereals, <b>{name}</b>. Nulla semper fringilla
                urna, in laoreet purus viverra vitae. Nullam vitae ipsum
                feugiat, tincidunt tellus id, venenatis enim. Nulla fringilla
                malesuada velit quis tristique. In hac habitasse platea
                dictumst. Praesent at sem nisl.
              </span>
            </Col>
          </Row>

          <Row>
            <Col lg={3}>
              <div className="mt-2">
                {quantity === 0 ? (
                  <Button
                    className="w-100 button-add"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    Add to cart
                  </Button>
                ) : (
                  <div>
                    <Button
                      className="button-add"
                      onClick={() => decreaseCartQuantity(id)}
                    >
                      -
                    </Button>
                    <span className="ms-1 me-1">{quantity} in cart</span>
                    <Button
                      className="button-add"
                      onClick={() => increaseCartQuantity(id)}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => removeFromCart(id)}
                      variant="danger"
                      className="float-end"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
