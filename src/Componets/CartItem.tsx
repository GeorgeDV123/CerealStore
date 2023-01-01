import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "./Context/ShoppingCartContext";
import storeItems from "../data/Data.json";
import { formatCurrency } from "../Utilities/format";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps): any {
  const { decreaseCartQuantity } = useShoppingCart();
  const { increaseCartQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        className="rounded"
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".85rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}/kg
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => decreaseCartQuantity(item.id)}
      >
        -
      </Button>
      <Button
        className="button-add"
        size="sm"
        onClick={() => increaseCartQuantity(item.id)}
      >
        +
      </Button>
    </Stack>
  );
}
