import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./Context/ShoppingCartContext";
import { formatCurrency } from "../Utilities/format";
import { CartItem } from "./CartItem";
import storeItems from "../Data/data.json";


interface ShoppingCartProps {
  isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, clearCart, cartItems } = useShoppingCart();
  {/* Display cart items */}
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
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
        </Stack>
        <Button onClick={clearCart} variant="danger float-end">
          Clear Cart
        </Button>
        <Button
          variant="primary float-start"
          href="/confirm"
        >
          Checkout
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
