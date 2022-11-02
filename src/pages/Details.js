import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../component/Breadcrumb/index'

// import Hero from "../parts/Hero"
// import BrowserRoom from '../parts/HomePage/BrowserRoom'
// import JustArr from '../parts/HomePage/JustArrived'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'




export default function HomePage() {
  return (
    <>
    <Header theme="black"/>
      <Breadcrumb
        list={[
        { url: "/", name: "Home" },
        { url: "/categories/91231", name: " Office Room" },
        { url: "/categories/91231/products/78888", name: "details "},     
        ]} />
      <ProductDetails />
      <Suggestion/>
      <Clients />
      <Sitemap />
      <Footer/>
    </>
  )
}
