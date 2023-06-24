import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import DetailsCard from './components/DetailsCard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/details/:id",
    element:<DetailsCard />
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
