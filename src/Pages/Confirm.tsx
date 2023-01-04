import { useState } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { CartItem } from "../Componets/CartItem";
import { formatCurrency } from "../Utilities/format";
import { useShoppingCart } from "../Componets/Context/ShoppingCartContext";
import storeItems from "../data/Data.json";

export function Confirm() {
  const { clearCart } = useShoppingCart();
  const { cartItems } = useShoppingCart();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  document.body.style.background = 'url("/imgs/Cereal1.jpg")'
  document.body.style.backgroundSize = 'cover'
  return (
    <section className="confirm-box">
      {/* View cart items */}
      <Stack gap={2}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
        <Button className="w-75 m-auto" onClick={handleShow}>
          Confirm Payment
        </Button>
      </Stack>

      {/* "Purchase Confirm" */}
      <Modal
        show={show}
        onHide={handleClose}
        size="sm"
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>Purchase Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order number is #123ABC999</Modal.Body>
        <Modal.Footer>
          <Button className="me-auto" onClick={clearCart} href="/">
            Thank You!
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
