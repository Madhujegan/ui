import './App.css'
import Signup from "./pages/signup"
import { Button } from "@/components/ui/button"
import Forget from './pages/Forget'
import Login from './pages/Login'
import Otp from './pages/Otp'
import Home from './pages/Home'
import { BrowserRouter as  Router, Route, Link, Routes,createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
   {
    path: "/",
    element: <Login/>,
   },
   {
    path: "/signup",
    element: <Signup/>,
   },
   {
    path: "/forget",
    element: <Forget/>,
   },
   {
    path: "/home",
    element: <Home/>
   },
   {
    path: "/otp",
    element: <Otp/>
   },
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
