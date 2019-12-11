import ReactDOM from "react-dom"
import React from "react"
import { Modal } from "./Modal"

const rootEl = document.getElementById("react-popup")

rootEl && ReactDOM.render(<Modal />, rootEl)
