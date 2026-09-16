import { Minus, Plus, Trash2, Save } from "lucide-react";
import { formatCurrency } from "@/app/lib/currency";
import { Button } from "@/app/shared/ui/button";
import type { CartItem as CartItemType } from "@/app/service/type";

interface CartItemHandlers {
  handleUpdateQuantity: (id: string, qty: number, stock: number) => void;
  handleRemoveItem: (id: string, name: string) => void;
  handleSaveForLater: (id: string) => void;
}

interface CartItemProps {
  item: CartItemType;
  handlers: CartItemHandlers;
}

export const CartItem = ({ item, handlers }: CartItemProps) => {
  const { handleUpdateQuantity, handleRemoveItem, handleSaveForLater } =
    handlers;

  return (
    <div className="flex justify-between p-4 border rounded-lg">
      <div>
        <h3>{item.product.name}</h3>
        <p>{formatCurrency(item.product.price)}</p>

        <div className="flex gap-2 mt-2">
          <button
            onClick={() =>
              handleUpdateQuantity(
                item.product.id,
                item.quantity - 1,
                item.product.stock ?? 0,
              )
            }
          >
            <Minus />
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              handleUpdateQuantity(
                item.product.id,
                item.quantity + 1,
                item.product.stock ?? 0,
              )
            }
          >
            <Plus />
          </button>
        </div>
      </div>

      <div>
        <p>{formatCurrency(item.product.price * item.quantity)}</p>

        <Button onClick={() => handleSaveForLater(item.product.id)}>
          <Save />
        </Button>

        <Button
          onClick={() => handleRemoveItem(item.product.id, item.product.name)}
        >
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};
