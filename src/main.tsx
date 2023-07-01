import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import DetailsCard from './components/DetailsCard.tsx';
import { Provider } from 'react-redux/es/exports';
import { store } from './Store/store.ts';
import Error from './helpers/Error.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />
  },
  {
    path:"/details/:id",
    element:<DetailsCard />
  },
  {
    path:"/platform",
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
