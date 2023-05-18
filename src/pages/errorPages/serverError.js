import React from "react";
import serverError from "../../components/500.jpeg"

const ServerErrorPage=()=>{
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
       <img className="d-flex p-2" src={serverError} alt="serverError"></img>
      </div>
    );    
}
export default ServerErrorPage;
