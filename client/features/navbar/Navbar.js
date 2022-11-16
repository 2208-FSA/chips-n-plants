import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../app/store"
import { me } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.me.username);

  useEffect(() => {
    dispatch(me());
  }, []);

  const handleLogout = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  }

  return (
    <div className="navbar_container">
      <div className="announcement_bar">
        <p> Free standard shipping on all orders over $4000!! </p>
      </div>
      <div className="nav_body_container">
        <nav className="nav_links_container">
          <ul className="nav_links_list">
            <li>
              <a href="/shop">shop</a>
            </li>
            <li>
              <a href="/signup">log-in/sign-up</a>
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

          <button>
            {isLoggedIn ? <a className="account_login_nav_button" href="/account">Hello, {username}</a>:<a className="account_login_nav_button" href="/login">Sign In</a>}
          </button>

          <form onSubmit={handleLogout}>
            <button type='submit'>Logout User</button>
          </form>

          <a href="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Navbar
