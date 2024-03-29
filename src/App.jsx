import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import { Toaster } from 'react-hot-toast'
import Cart from './component/Cart/Cart';
import Protect from './component/Protect/Protect'
import LogOut from './component/logOut/LogOut'
import Home from './component/Home/Home.jsx'
import UserDetails from './component/Account/UserDetails/UserDetails.jsx'
import LayoutAccount from './component/Account/LayoutAccount.jsx'
import './App.css'
import ChangePassword from './component/Account/changePassword/ChangePassword.jsx'
import MainLoader from './component/loaders/MainLoader/MainLoader.jsx'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <MainLoader><Layout /></MainLoader>, children: [
        { index: true, element: <Home /> },  
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/logout', element: <Protect><LogOut /></Protect> },
        { path: '/Account', element: <Protect><LayoutAccount /></Protect>,children:[
          {index:true ,path:'/Account/userDetails', element: <Protect><UserDetails/></Protect>},
          {path:'/Account/newService', element: <Protect><ChangePassword/></Protect>},
        ] },
        { path: '/cart', element: <Protect><Cart /></Protect> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}
