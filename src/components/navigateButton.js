import React from "react";
import { useNavigate } from "react-router-dom";
import "./bootstrap.css";
 import "../pages/styles.css"

const NavigateButton =(props)=>{
    const navigate = useNavigate();
    return(
        <div className="navigateButton">
        <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate(props.text)}>Create New</button>
        </div>
        );
}

export default NavigateButton;