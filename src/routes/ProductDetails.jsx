import { useParams, useNavigate } from 'react-router-dom';

// Nested routes
const ProductDetails = () => {
  const { id } = useParams();

  // redirect
  const navigate = useNavigate();

  const handleContact = () => {
    console.log("Voltou para home");
    return navigate("/");
  }

  return (
    <div>
      <h1>Product info:  {id} </h1>
      <button onClick={handleContact}>Back to HomePage</button>
    </div>
  )
}

export default ProductDetails