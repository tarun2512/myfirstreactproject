import React, { useState } from 'react'
import './login.css'
import Footer from '../Footer/footer'
import Home from '../home/home'


function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      authenticationError: "invalid username or password",
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({message: errors.authenticationError });
        } else {
          setIsSubmitted(true);
        }}
      else {
        setErrorMessages({message: errors.authenticationError });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = () => (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderLoginForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            {renderErrorMessage()}
            <input type="text" name="uname" required />

          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="login">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div><Home />
          </div> : renderLoginForm}
        </div>
      </div>
    );
  }

function LoginPage() {
    return (
        <body className="body">
        <div>
            <Login />
            <Footer />
        </div>
        </body>
    );
}
export default LoginPage