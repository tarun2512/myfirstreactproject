import React, { useState } from 'react'
import './login.css'
import Footer from '../Footer/footer'
import Home from '../home/home'
import { ServiceUtils } from "../../Shared/Services/Utils";
// import axios from 'axios';


function VisitorLogin() {
    // React States
    const [isUser, setIsUser] = useState(false);
    const handleKeyDown = async (e) => {
      if (e.key === 'Enter') {
        var { uname } = document.forms[0];
        try {
          const url = 'http://localhost:8999/visitor-login';
          const payload = {          
            "user_name": uname.value}
          const response = await ServiceUtils.postRequest(url, payload, true);
      
          console.log(response); // Log the response data
      
          // Check the response from the server for login success or failure
          if (response.data.status === 'success') {
            setIsUser(true);
            // Login successful
          } else {
            // Login failed
            console.log()
          }
        } catch (error) {
          console.error('Error while logging in', error);
        }
        // Perform the action you want here
      }
    };
    
  
    // JSX code for login form
    const renderUserLoginForm = (
      <div className="form">
        <form >
        <div className="input-container">
            <label>Username </label>
            <input type="text"         name="uname"
                onKeyDown={handleKeyDown}  required />
        </div>
        </form>
      </div>
    );
  
    return (
        <div>
          {isUser ? <div><Home />
          </div> : renderUserLoginForm}
        </div>
    );
  }
  

function VisitorLoginPage() {
    return (
        <body className="body">
        <div>
            <VisitorLogin />
            <Footer />
        </div>
        </body>
    );
}
export default VisitorLoginPage