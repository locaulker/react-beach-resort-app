import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="Contact Us">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
    </>
  )
}

export default Contact
