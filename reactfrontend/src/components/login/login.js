import React, { useState } from 'react'
import './login.css'
import Footer from '../Footer/footer'
import Home from '../home/home'
import VisitorLoginPage from './visitorlogin'
import { ServiceUtils } from "../../Shared/Services/Utils";


function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isUser, setIsUser] = useState(false);
  
    const errors = {
      authenticationError: "invalid username or password",
    };

    const handleClick = () => {
      setIsUser(true);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      var { uname, pass } = document.forms[0];
      try {
        // const url = 'http://localhost:8999/login';
        const payload = {          
                          "user_name": uname.value,
                          "password": pass.value,}
        let url = "http://localhost:8999/login"
        const response = await ServiceUtils.postRequest(url, payload, true);
    
        console.log(response); // Log the response data
    
        // Check the response from the server for login success or failure
        if (response.data.status === 'success') {
          setIsSubmitted(true);
          // Login successful
        } else {
          // Login failed
          setErrorMessages({message: errors.authenticationError });
        }
      } catch (error) {
        console.error('Error while logging in', error);
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
            {renderErrorMessage()}
            <label>Username </label>
            <input type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div>
            <a onClick={handleClick} style={{ cursor: 'pointer' }}>
              Not an Admin?
            </a>
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
          {isUser ? < VisitorLoginPage /> : (isSubmitted ? <div><Home />
          </div> : renderLoginForm) }
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