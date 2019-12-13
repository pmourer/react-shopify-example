import React from "react"

export const CartSummary = ({ items, total }) => (
  <div
    style={{
      textAlign: "center",
      padding: "5%"
    }}
  >
    {items > 0 ? (
      <>
        <p>Items: {items}</p>
        <p>Total: ${total / 100}</p>
        <a href={'/cart'} className="btn">
          Go to Cart
        </a>
      </>
    ) : (
      <p>There's nothing in your cart!</p>
    )}
  </div>
)
