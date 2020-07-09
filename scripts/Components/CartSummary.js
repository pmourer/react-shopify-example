import React from "react"
import { formatMoney } from "@shopify/theme-currency"

export const CartSummary = ({ items, total, phone, moneyFormat }) => (
  <div
    style={{
      textAlign: "center",
    }}
  >
    {items > 0 ? (
      <>
        <p>Items: {items}</p>
        <p>Total: {formatMoney(total, moneyFormat)}</p>
        <a href={"/cart"} className="btn">
          Go to Cart
        </a>
      </>
    ) : (
      <p>There's nothing in your cart!</p>
    )}
    <br />
    <br />
    <p>
      Any questions? Don't hesitate to give use a call!
      <br />
      {`${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`}
    </p>
  </div>
)
