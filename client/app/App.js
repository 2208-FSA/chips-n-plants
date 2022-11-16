import React from "react"
import Navbar from "../features/navbar/Navbar"
import Body from "../features/body/Body"
import Footer from "../features/footer/Footer"
import Cart from "../features/cart/Cart" // temporary for TESTING ONLY
import AppRoutes from "./AppRoutes"
import { Routes, Route } from "react-router-dom"
import AuthForm from "../features/auth/AuthForm"
import SignUpForm from "../features/signUp/SignUp"
import SingleProductView from "../features/singleproductview/SingleProductView"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<AuthForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Body />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/products/:productId"
          element={
            <>
              <Navbar />
              <SingleProductView />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
