import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const SingleProduct = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [addProductId, setAddProductId] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [rating, setRating] = useState(0)
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data);
    };
    fetchProduct();
  }, [id])

  const handleAddToCart = (event) => {
    event.preventDefault()
    console.log("===========hi===========")
    dispatch(addToCartThunk(addProductId, quantity))
  }

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId))
  }

  const handleEdit = (productId) => {
    setEdit(true)
    dispatch(editProduct(productId))
  }

  // clicking a product image will take you to the single product view page
  // this is done by using the product id as a parameter in the url
  // the product id is passed in as a prop from the product component
  // the product id is then used to fetch the product from the database
  // the product is then set to state and rendered on the page

  return (
    <div>
      <article className="single_product">
        <div className="product_img_container">
          <Link to={`/products/${product.id}`}>
            <img
              className="product_img"
              src="https://cdn.shopify.com/s/files/1/1952/0115/files/PLNTS_Lime-Hero-4_843d80c7-ebf5-4f52-b028-0c56d848f69a.png?v=1641568430"
            />
          </Link>
        </div>


        <h2 className="product_name">{product.title}</h2>
        <span className="product_description">{product.description}</span>
        <h3 className="product_rating">{product.rating}</h3>
        <span className="product_price">{product.price}</span>
        <button onClick={() => handleDelete(student.id)}>Delete</button>
        <button onClick={() => handleEdit(student.id)}>Edit</button>
      </article>

    </div>
  )
}

export default SingleProduct
