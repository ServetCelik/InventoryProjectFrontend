import React from "react";
import errorPic from "../../components/errorPic.jpg"

const ErrorPage=()=>{
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
       <img className="d-flex p-2" src={errorPic} alt="errorPic"></img>
      </div>
    );    
}
export default ErrorPage;
