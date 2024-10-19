import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Blog from "./components/Blog/Blog"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='header' element={<Header />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='footer' element={<Footer />} />
      <Route path='blog' element={<Blog />} />
      </Route>
      
    )
  )
  return (
   <RouterProvider router={router} />
  )
}

export default App

