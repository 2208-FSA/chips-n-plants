import React from "react"
import {
  fetchOrdersAsync,
  addProductToOrderAsync,
} from "../../slices/ordersSlice.js"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

/**
 * COMPONENT
 */
const Cart = () => {
  const orders = useSelector((state) => state.orders)

  const dispatch = useDispatch()

  useEffect(() => {
    // TEMPORARY.
    // probably want to fetch the products of one order for cart
    dispatch(fetchOrdersAsync()) // this is the thunk which will grab the all the ORDERS slice
  }, [])

  // TEMPORARY BELOW
  console.log("==========orders state==========", orders)
  function handleAddProduct(event) {
    event.preventDefault()
    console.log("=======button clicked in component level")
    const a = { payloadOrderId: 1, payloadProductId: 9 }
    dispatch(addProductToOrderAsync(a))
  }
  //TEMPORARY ABOVE

  return (
    <div className="cart_body_container">
      <div className="cart_body_items_container">
        <div className="cart_items_heading">HEADING: My Order of Items</div>

        <div className="cart_items_all_container">
          {/* TO RECIEVE AN ARRAY OF STATE ITEMS IN CART TO BE MAPPED AS BELOW*/}
          {/* TO RECIEVE AN ARRAY OF STATE ITEMS IN CART TO BE MAPPED AS BELOW*/}

          {/* TEMPORARY */}
          <form onSubmit={handleAddProduct}>
            <button type="submit" onClick={() => {}}>
              add product
            </button>
          </form>
          {/* TEMPORARY */}

          <div className="cart_single_item">
            <img
              width="150px"
              height="150px"
              className="cart_item_img"
              src="https://cdn.shopify.com/s/files/1/1952/0115/files/PLNTS_Lime-Hero-4_843d80c7-ebf5-4f52-b028-0c56d848f69a.png?v=1641568430"
            />
            <div className="cart_item_description">
              <p>"$product.cost"</p>
              <p>"$product.description"</p>
              <p>"$product.order.quantity"</p>
              <button>Remove item from cart</button>
            </div>
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
