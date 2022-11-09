import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo_social_container">
        <img className="footer_logo"></img>
        <img className="instagram_logo"></img>
        <img className="facebook_logo"></img>
      </div>
      <div className="footer_nav">
        <ul className="footer_nav_left"></ul>
        <ul className="footer_nav_right"></ul>
      </div>
      <div className="footer_contact">
        <p> stay in touch, input email</p>
        <label>
          Enter your email:
          <input type="text"></input>
        </label>
        <button>sign up</button>
      </div>
    </div>
  )
}

export default Footer
