import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../app/store"

const Navbar = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const logoutAndRedirectHome = () => {
  //   dispatch(logout())
  //   navigate("/login")
  // }

  return (
    <div>
      <nav className="nav_main_container">
        <div className="nav_top_banner_container">
          <p> banner text here</p>
        </div>
        <div className="nav_body_container">
          <div className="nav_links_container">
            <ul className="nav_links_list">
              {/* these will be links to other pages on site */}
              <li>shop all items</li>
              <li>blog</li>
              <li>about us</li>
            </ul>
          </div>
          <div className="nav_logo">
            logo
            <img src="../../../public/assets/imgs/logos/chips-n-plants-logos/z_placeholder_logo1" />
          </div>
          <div className="nav_user_cart">
            user, cart
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </nav>
    </div>
  )

  // return (
  //   <div>
  //     <h1>FS-App-Template</h1>

  //     <nav>
  //       {isLoggedIn ? (
  //         <div>
  //           {/* The navbar will show these links after you log in */}
  //           <Link to="/home">Home</Link>
  //           <button type="button" onClick={logoutAndRedirectHome}>
  //             Logout
  //           </button>
  //         </div>
  //       ) : (
  //         <div>
  //           {/* The navbar will show these links before you log in */}
  //           <Link to="/login">Login</Link>
  //           <Link to="/signup">Sign Up</Link>
  //         </div>
  //       )}
  //     </nav>

  //     <hr />
  //   </div>
  // )
}

export default Navbar
