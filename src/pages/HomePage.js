import React from 'react'
import Header from '../parts/Header'
import Hero from "../parts/Hero"
import BrowserRoom from '../parts/HomePage/BrowserRoom'
import JustArr from '../parts/HomePage/JustArrived'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'




export default function HomePage(props) {
  return (
    <>
    <Header/>
    <Hero/>
    <BrowserRoom/>
      <JustArr />
      <Clients />
      <Sitemap />
      <Footer/>
    </>
  )
}
