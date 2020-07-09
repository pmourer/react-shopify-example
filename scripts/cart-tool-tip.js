import ReactDOM from "react-dom"
import React from "react"
import { CartToolTip } from "./Components/CartToolTip"

const rootEl = document.getElementById("react-cart-tool-tip")

if (rootEl) {
    const moneyFormat = rootEl.dataset.moneyFormat
    const phone = rootEl.dataset.phone
    ReactDOM.render(<CartToolTip phone={phone} moneyFormat={moneyFormat} />, rootEl)
}
