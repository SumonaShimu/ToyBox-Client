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
import AuthProvider from './Pages/AuthProvider';
import PrivateRoute from './Pages/private/PrivateRoute';
import Details from './Pages/private/Details';
import MyToys from './Pages/private/MyToys';
import Error from './Pages/Error';
import { ToastContainer } from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader:()=>fetch('https://toybox-server.vercel.app/alltoys')
      },
      {
        path: "/add-a-toy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://toybox-server.vercel.app/toy/${params.id}`)
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
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
  {
    path: "*",
    element: <Error></Error>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer/>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
