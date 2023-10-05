
import './App.css';
import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/login/login'
// import Home from './components/home/home'

function App() {
  return (
    <div >
    <LoginPage />
        {/* <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" component={Home} />
      </Router> */}
      </div>
  );
}

export default App;
