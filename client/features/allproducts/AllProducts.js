import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import { fetchProducts } from "../store/productsSlice"
// import { deleteProduct } from "../store/productsSlice"
// import { editProduct } from "../store/productsSlice"

const products = [
  {
    id: 1,
    title: "Lime Tortilla Chips",
    description: "Yummy lime chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Lime-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.706Z",
    price: 19.99,
    quantity: null,
    rating: 5,
    updatedAt: "2022-11-09T21:13:02.706Z",
    ordersProductId: null,
  },
  {
    id: 2,
    title: "Ranch Tortilla Chips",
    description: "Yummy ranch chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 3,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 3,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 4,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 5,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 6,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 7,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 8,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
  {
    id: 9,
    title: "Nacho Tortilla Chips",
    description: "Yummy nacho chips",
    productType: null,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1952/0115/products/PS_TC_Back_Ranch-2048.png",
    vendor: null,
    createdAt: "2022-11-09T21:13:02.707Z",
    price: 19.99,
    quantity: null,
    rating: 4,
    updatedAt: "2022-11-09T21:13:02.707Z",
    ordersProductId: null,
  },
]


/**
 * COMPONENT
 */
const AllProducts = () => {
  // const products = useSelector((state) => state.products)

  const dispatch = useDispatch

  // const handleDelete = (productId) => {
  //   dispatch(deleteProduct(productId))
  // }

  // const handleEdit = (productId) => {
  //   setEdit(true)
  //   dispatch(editProduct({ title, description, price, rating }))
  // }


  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [])

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="products_container">
        {products.map((product) => {
          return (
            <div>
              <article className="single_product">
                <div className="product_img_container">
                  <img className="product_img" src={product.imageUrl} />
                </div>

                <h2 classname="product_name">{product.title}</h2>
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
