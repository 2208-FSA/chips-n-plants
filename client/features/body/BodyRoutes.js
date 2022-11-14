import React from "react"
import { Route, Routes } from "react-router-dom"
import Body from "./Body"
import SingleProductView from "../singleproductview/SingleProductView"
import AllProducts from "../allproducts/AllProducts"
import Cart from "../cart/Cart"

const BodyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<AllProducts />} />
        <Route path="/products/:productId" element={<SingleProductView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default BodyRoutes
