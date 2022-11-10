import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

/**
 * COMPONENT
 */
const SingleProductView = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data);
    };
    fetchProduct();
  }, [id])

  return (
    <div>
      <article className="single_product">
        <div className="product_img_container">
          <img
            className="product_img"
            src="https://cdn.shopify.com/s/files/1/1952/0115/files/PLNTS_Lime-Hero-4_843d80c7-ebf5-4f52-b028-0c56d848f69a.png?v=1641568430"
          />
        </div>

        <h2 className="product_name">{product.title}</h2>
        <span className="product_description">{product.description}</span>
        <h3 className="product_rating">{product.rating}</h3>
        <span className="product_price">{product.price}</span>
      </article>
    </div>
  )
}

export default SingleProductView
