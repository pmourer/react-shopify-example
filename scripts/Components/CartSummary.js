import React from "react"

export const CartSummary = ({ items, total, cartUrl }) => (
  <div
    style={{
      textAlign: "center"
    }}
  >
    <p>Items: {items}</p>
    <p>Total: ${total / 100}</p>
    <a href={cartUrl} className="btn">
      Go to Cart
    </a>
  </div>
)
