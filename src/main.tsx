import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import DetailsCard from './components/DetailsCard.tsx';
import { Provider } from 'react-redux/es/exports';
import { store } from './Store/store.ts';
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
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
