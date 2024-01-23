import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <p>
        <Link to='/product/1'>Product 1</Link>
      </p>
      <p>
        <Link to='/product/2'>Product 2</Link>
      </p>
      <p>
        <Link to='/product/3'>Product 3</Link>
      </p>

    </div>
  )
}

export default Product