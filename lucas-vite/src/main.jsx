import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
    // import Footer from './componentes/Footer';


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
    }

  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
