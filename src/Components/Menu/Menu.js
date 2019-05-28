import React from 'react';
import '../../App.css';

function Menu() {
  return (
    
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="navbar navbar-expand-md navbar-light bg-light" >
            <div className="navbar-brand" href="/">
            <a href="/"><img width="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png" alt="logo"/></a>
            </div>
            <div className="navbar-nav ml-auto" navbar>
              <div className="nav-item">
                <a className="nav-link" href="/account/create">Register</a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="/account/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Menu;