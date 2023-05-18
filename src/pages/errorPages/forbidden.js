import React from "react";
import forbidden from "../../components/403.jpeg"

const ForbiddenPage=()=>{
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
       <img className="d-flex p-2" src={forbidden} alt="forbidden"></img>
      </div>
    );    
}
export default ForbiddenPage;
