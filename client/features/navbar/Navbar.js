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
    <div className="navbar_container">
      <div className="announcement_bar">
        <p> Free standard shipping on all orders over $4000 </p>
      </div>
      <div className="nav_body_container">
        <nav className="nav_links_container">
          <ul className="nav_links_list">
            {/* these will be links to other pages on site */}
            <li>
              <a href="/shop">shop</a>
            </li>
            <li>
              <a href="/blog">blog</a>
            </li>
            <li>
              <a href="/about-us">about us</a>
            </li>
          </ul>
        </nav>
        <div className="nav_logo_container">
          <a href="/">
            <img className="nav_logo_img" src="./logo.png" />
          </a>
        </div>
        <div className="nav_user_cart">
          <a href="/account">
            <span className="material-symbols-outlined">account_circle</span>
          </a>
          <a href="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>
        </div>
      </div>
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
