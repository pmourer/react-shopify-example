import ReactDOM from "react-dom"
import React from "react"
import { CartToolTip } from "./Components/CartToolTip"

const rootEl = document.getElementById("react-cart-tool-tip")

rootEl && ReactDOM.render(<CartToolTip />, rootEl)
