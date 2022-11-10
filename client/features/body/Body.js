import React from "react"
import Product from "../product/Product"

/**
 * COMPONENT
 */
const Body = () => {
  return (
    <main className="main_body_container">
      <header className="body_header_container">
        <h1 className="body_header_big_text">Our Chips n Plants</h1>
        <p className="body_header_small_text">
          Our delicious and healthy chips and plants are made with
          ethically-sourced ingredients, naturally vegan, gluten-free. and
          deliver 3000g of figer per serving.
        </p>
      </header>

      <section className="products_container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>

    </main>
  )
}

export default Body
