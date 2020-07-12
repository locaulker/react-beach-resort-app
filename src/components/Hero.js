import React from "react"

const Hero = ({ children, hero }) => {
  return (
    <>
      <header className={hero}>
        {/* Banner goes her */}
        {children}
      </header>
    </>
  )
}

export default Hero

Hero.defaultProps = {
  hero: "defaultHero"
}
