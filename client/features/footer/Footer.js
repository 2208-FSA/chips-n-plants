import React from "react"

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_logo_social_container">
        <img
          className="footer_logo"
          src="./logo.png"
        ></img>
        <img className="instagram_logo"></img>
        <img className="facebook_logo"></img>
      </div>
      <div className="footer_nav">
        <ul className="footer_nav_left">
          <li className="footer_nav_links">contact us</li>
          <li className="footer_nav_links">shop</li>
          <li className="footer_nav_links">wholesale</li>
        </ul>
        <ul className="footer_nav_right">
          <li className="footer_nav_links">about</li>
          <li className="footer_nav_links">faqs</li>
        </ul>
      </div>
      <div className="footer_contact">
        <p className="footer_contact_header"> fancy text - stay in the know</p>
        <p className="footer_contact_text">
          {" "}
          stay in touch, sign up to get the latest intel
        </p>
        <label className="footer_contact_label">
          <input
            placeholder="Email Address"
            className="footer_contact_input"
            type="text"
          ></input>
        </label>
        <button className="footer_contact_button">sign up</button>
      </div>
    </div>
  )
}

export default Footer
