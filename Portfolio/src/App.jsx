import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//hooks
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  // resgatando dados
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
    <div className="App">
      <Navbar />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}</li>
        
        ))}
      </ul> 
      <Outlet />
      <Footer />
    </div>
 );
}

export default App;