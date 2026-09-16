import { calculateTax, calculateShipping, calculateTotal, formatCurrency } from "@/app/lib/currency";
import type { Cart } from "@/app/service/type";

interface CartSummaryProps {
  cart: Cart;
}

export const CartSummary = ({ cart }: CartSummaryProps) => {
  const tax = calculateTax(cart.subtotal);
  const shipping = calculateShipping(cart.subtotal);
  const total = calculateTotal(cart.subtotal, tax, shipping);

  return (
    <div className="p-4 border rounded-lg">
      <p>Subtotal: {formatCurrency(cart.subtotal)}</p>
      <p>Tax: {formatCurrency(tax)}</p>
      <p>Shipping: {formatCurrency(shipping)}</p>
      <h3>Total: {formatCurrency(total)}</h3>
    </div>
  );
};
