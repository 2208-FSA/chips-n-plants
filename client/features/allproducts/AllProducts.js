import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAsync } from "../../slices/productsSlice"
import {
  fetchOrdersAsync,
  fetchOrderAndProductsAsync,
  addProductToOrderAsync,
} from "../../slices/ordersSlice.js"
// import { deleteProduct } from "../store/productsSlice"
// import { editProduct } from "../store/productsSlice"

/**
 * COMPONENT
 */

const AllProducts = () => {
  const products = useSelector((state) => state.products)
  const orders = useSelector((state) => state.orders) // probably need to add state.orders.allOrders
  const orderProducts = useSelector((state) => state.orders.orderProducts)
  const [addProductId, setAddProductId] = useState(0)

  const dispatch = useDispatch()

  // user/order ID grabbing here
  const DEFAULT_ORDER_ID = 1
  const [orderIdState, setOrderId] = useState(DEFAULT_ORDER_ID)
  let userOrderId = { orderId: orderIdState }

  async function handleAddToCart(event) {
    event.preventDefault()

    // check if product exists in order
    console.log("===== orderproducts before add to cart", orderProducts)
    console.log("===== current product trying to add: ", addProductId)
    const doesProductExistInCartAlready = orderProducts.find(
      (curElement) => curElement.id === addProductId
    )

    if (doesProductExistInCartAlready) {
      // todo instead of adding entire product to cart, we need to update via api route
      console.log(
        "====== the find is true, found: ",
        addProductId,
        doesProductExistInCartAlready
      )
      console.log("we just want to update the quantity")
    } else {
      // only adds full new product if did not find it already in the cart
      const thunkPayload = {
        payloadOrderId: orderIdState,
        payloadProductId: addProductId,
      }
      dispatch(addProductToOrderAsync(thunkPayload))
    }

    dispatch(fetchOrderAndProductsAsync(userOrderId))
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
    dispatch(fetchOrderAndProductsAsync(userOrderId))
  }, [])

  // console.log("====== orderproducts: ", orderProducts)

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="products_container">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <article className="single_product">
                <div className="product_img_container">
                  <Link to={`/products/${product.id}`}>
                    <img className="product_img" src={product.imageUrl} />
                  </Link>
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
