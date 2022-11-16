import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { me } from './authSlice';

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    //dispatch(authenticate({username, password, method: "login"}));
    dispatch(me({ username, password, method: "login" }));
    // location.replace("https://www.w3schools.com")
    window.location.href = "/"
  };

  return (
    <div className="auth_form_container">
      <form className="auth_form" onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default AuthForm;
