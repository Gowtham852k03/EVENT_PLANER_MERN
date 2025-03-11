import React from 'react'
import { Link } from 'react-scroll'
const HeroSection = () => {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="" />
      <div className="item">
        <h3>WELCOME TO</h3>
        <div>
          <h1>EVENT PLANNER</h1>
          <p>Plan your event with us</p>
          <Link to='contact' spy={true} smooth={true} offset={-200} duration={500}>
            Book Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
