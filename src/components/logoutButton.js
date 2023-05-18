import React from "react";
import { useNavigate } from "react-router-dom";
import "./bootstrap.css";
 import "../pages/styles.css"
 import authService from "../services/authService";

const LogoutButton =()=>{
    const navigate = useNavigate();

    const handleLogout =()=>{
        authService.logout();
        navigate("/");        
    }
    return(
        <div className="logoutButton" style={{marginTop:5 }} data-cy="logout">
        <button type="button" className="btn btn-primary btn-lg" onClick={handleLogout}><i className="bi bi-box-arrow-right"></i></button>
        </div>
        );
}

export default LogoutButton;