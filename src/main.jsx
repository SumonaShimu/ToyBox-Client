import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Pages/Home/MainLayout.jsx';
import Main from './Pages/Home/Main.jsx';
import Login from './Pages/Login/Login.jsx';
import Registration from './Pages/Registration/Registration.jsx';
import AllToys from './Pages/AllToys';
import AddToy from './Pages/private/AddToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addToy",
        element:<AddToy></AddToy>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
