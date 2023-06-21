import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from "./error-page";
import Cancellation from './pages/Cancellation.tsx';
import Book from './pages/Book.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';
import { AnimatePresence } from 'framer-motion';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/cancellation-policy",
        element: <Cancellation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
