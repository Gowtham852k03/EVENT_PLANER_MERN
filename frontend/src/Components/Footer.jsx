import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className='title'>
          <h1>KINGS</h1>
          <p>Event Planner</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
          <p>sign up with your email to get latest updates</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
