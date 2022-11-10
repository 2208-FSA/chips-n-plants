import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAsync } from "../../slices/productsSlice"
// import { deleteProduct } from "../store/productsSlice"
// import { editProduct } from "../store/productsSlice"

/**
 * COMPONENTzzzz
 */
const AllProducts = () => {
  const products = useSelector((state) => state.products)
  // !!!! add a cart redux state here?
  const [addProductId, setAddProductId] = useState(0)

  const dispatch = useDispatch()

  // !!!!!!! add the thunk HERE FOR WHEN WE CONNECT CART TO A DATABASE
  async function handleAddToCart(event) {
    event.preventDefault()
    console.log("===========hi===========")

    // dispatch(ADD_TO_CART_THUNK_HERE(addProductId))
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
                <h3 className="product_rating">{product.rating}</h3>
                <span className="product_price">{product.price}</span>
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
