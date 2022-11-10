import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../slices/productsSlice";
// import { deleteProduct } from "../store/productsSlice"
// import { editProduct } from "../store/productsSlice"

/**
 * COMPONENTzz
 */
const AllProducts = () => {
  const products = useSelector((state) => state.products)

  const dispatch = useDispatch();

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
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts
