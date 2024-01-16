import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Product from './routes/Product';
import ProductDetails from './routes/ProductDetails';
import ErrorPage from './routes/ErrorPage';

//styles
//import '.src/components/css/Navbar.module.css';

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: '/Contact',
      element: <Contact />
    },
    {
      path: '/Product',
      element: <Product />
    },

    // Nested Routes /:id
    {
      path: 'product/:id',
      element: <ProductDetails />,
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
