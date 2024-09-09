import AboutUs from "@/components/AboutUs"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProductsSection from "@/components/ProductsSection"
import React from "react"

const HomePageTemplate = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Navbar />
      <Banner />
      <ProductsSection />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default HomePageTemplate
