import React from "react"
import Navbar from "../features/navbar/Navbar"
import Body from "../features/body/Body"
import Footer from "../features/footer/Footer"
import Cart from "../features/cart/Cart" // temporary for TESTING ONLY
import AppRoutes from "./AppRoutes"

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Body />
      <Footer />
      {/* BELOW CART IS TEMPORARY */}
      <Cart />
    </div>
  )
}

export default App
