import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


/**
 * COMPONENT
 */
const SingleProductView = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`)
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError(true)
      }
    }
    getProduct()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <p>{product.rating}</p>
      <Link to={`/products/${product.id}/edit`}>Edit</Link>
    </div>
  )
}

export default SingleProductView

