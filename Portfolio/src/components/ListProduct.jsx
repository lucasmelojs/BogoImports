import { useState, useEffect } from 'react';

const ListProduct = () => {
    const url = "http://localhost:3000/products"
   const [products, setProducts] = useState([])

   useEffect(() => {
     async function fetchData(){
       const res = await fetch(url)

       const data = await res.json()

       setProducts(data)
     }

     fetchData();
   }, []);

   console.log (products);

  return (
    <div>
        <ul>
    {products.map((product) => (
      <li key={product.id}>
        {product.name} - R$: {product.price}</li>
    
    ))}
  </ul> 
  </div>
  )
}

export default ListProduct