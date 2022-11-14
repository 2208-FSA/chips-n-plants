import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const SingleProduct = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const { id } = useParams();


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
          <img className="product_img" src={product.imageUrl} />
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
