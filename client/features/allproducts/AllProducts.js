import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAsync } from "../../slices/productsSlice"
import {
  fetchOrdersAsync,
  addProductToOrderAsync,
} from "../../slices/ordersSlice.js"
// import { deleteProduct } from "../store/productsSlice"
// import { editProduct } from "../store/productsSlice"

/**
 * COMPONENT
 */

const AllProducts = () => {
  const products = useSelector((state) => state.products)
  const orders = useSelector((state) => state.orders)
  const [addProductId, setAddProductId] = useState(0)

  const dispatch = useDispatch()

  // todo fix only one instance of product adding
  // ! adds product... but only if there is no instance of that same prodID already
  async function handleAddToCart(event) {
    event.preventDefault()

    // ! need to dynamically get a cart here ==========, in place of hardcoded order ID 1
    const a = { payloadOrderId: 1, payloadProductId: addProductId }
    dispatch(addProductToOrderAsync(a))
  }

  // const handleDelete = (productId) => {
  //   dispatch(deleteProduct(productId))
  // }

  // const handleEdit = (productId) => {
  //   setEdit(true)
  //   dispatch(editProduct({ title, description, price, rating }))
  // }

  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [])

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="products_container">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <article className="single_product">
                <div className="product_img_container">
                  <img className="product_img" src={product.imageUrl} />
                </div>

                <h2 className="product_name">{product.title}</h2>
                <span className="product_description">
                  {product.description}
                </span>
                <h3 className="product_rating">RATING: {product.rating}</h3>
                <span className="product_price">${product.price}</span>
                <form onSubmit={handleAddToCart}>
                  <button
                    type="submit"
                    className="product_add_to_cart_button"
                    onClick={() => {
                      setAddProductId(product.id)
                    }}
                  >
                    Add To Cart
                  </button>
                </form>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts
