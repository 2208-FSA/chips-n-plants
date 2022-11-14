import React from "react"
import {
  fetchOrdersAsync,
  addProductToOrderAsync,
  fetchOrderAndProductsAsync,
} from "../../slices/ordersSlice.js"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Cart = () => {
  const orders = useSelector((state) => state.orders.allOrders)
  const orderProducts = useSelector((state) => state.orders.orderProducts)

  const dispatch = useDispatch()

  // THIS IS TEMPORARYz
  // THIS IS TEMPORARY
  // THIS IS TEMPORARY
  const temporary = { orderId: 3 }

  useEffect(() => {
    //dispatch the fetch single order, give it the order ID as the payload
    // SEND to THUNK: orderID
    dispatch(fetchOrderAndProductsAsync(temporary))
  }, [])

  return (
    <div>
      <div className="cart_body_container">
        <div className="cart_body_items_container">
          <div className="cart_items_heading">HEADING: My Order of Items</div>
          <div className="cart_items_all_container">
            {orderProducts.map((singleProduct) => {
              return (
                <div className="cart_single_item" key={singleProduct.id}>
                  <img
                    width="150px"
                    height="150px"
                    className="cart_item_img"
                    src={singleProduct.imageUrl}
                  />
                  <div className="cart_item_description">
                    <p>{singleProduct.title}</p>
                    <p>{singleProduct.price}</p>
                    <p>{singleProduct.description}</p>
                    <button>Remove item from cart</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="cart_body_payment_container">
        <h3 className="cart_payment_heading">TOTAL</h3>
        <div className="cart_payment_costs_container">
          <ul className="cart_payment_costs_labels">
            <li>Sub-total</li>
            <li>Shipping</li>
          </ul>
          <ul className="cart_payment_costs_values">
            <li>"$TOTAL_COST_HERE"</li>
            <li>"$SHIPPING_COST"</li>
          </ul>
        </div>
        <button className="cart_payment_checkout_btn">CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart
