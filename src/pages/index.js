import React from "react"
import '../styles/index.scss'
import Header from '../components/header.js'
import MainBackground from '../components/main-background.js'
import About from '../components/about.js'
import Offer from '../components/offer.js'
import Form from '../components/form.js'
import Footer from '../components/footer.js'

const Leyout = () => {
  return (
    <div>
      <Header />
      <MainBackground />
      <About />
      <Offer />
      <Form />
      <Footer />
      {/* <div class="ending"></div> */}
    </div>
  )
}

export default Leyout
