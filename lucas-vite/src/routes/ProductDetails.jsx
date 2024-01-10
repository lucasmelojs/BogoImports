import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product info</h1>
      <p> { id }</p>
    </div>
  )
}

export default ProductDetails