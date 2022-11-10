import React from "react"

/**
 * COMPONENT
 */
const Product = () => {
  return (
    <div>
      <article className="single_product">

        <div className="product_img_container">
          <img
            className="product_img"
            src="https://cdn.shopify.com/s/files/1/1952/0115/files/PLNTS_Lime-Hero-4_843d80c7-ebf5-4f52-b028-0c56d848f69a.png?v=1641568430"
          />
        </div>

        <h2 classname="product_name">CHIPS</h2>
        <p className="product_description">Tasty tasty tasty</p>
      </article>
    </div>
  )
}

export default Product
