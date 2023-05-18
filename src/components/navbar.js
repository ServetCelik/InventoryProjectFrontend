import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./bootstrap.css";
import LogoutButton from "./logoutButton";

const Navbar =()=>{
return(
    
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        
        <li className="navbar-item" >
        <Link className="nav-link" to="/"><i className="bi bi-house-door" style={{padding:20}}></i></Link> 
        </li>
        <li className="nav-item">          
          <Link className="nav-link" to="/signin">SignIn</Link>
        </li>
        <li className="nav-item">          
          <Link className="nav-link" to="/signup">Signup</Link>        
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/products">Product</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/locations">Location</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/departments" data-cy="department" >Department</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/pallets">Pallet</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/invoices">Invoice</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/employees">Employee</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/chat">LiveChat</Link>
        </li>
        <LogoutButton/>
      </ul>
    </div>
  </div>
</nav>
);
}

export default Navbar;


