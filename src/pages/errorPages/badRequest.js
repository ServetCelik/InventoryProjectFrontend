import React from "react";
import badRequest from "../../components/400.jpeg"

const BadRequestPage=()=>{
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
       <img className="d-flex p-2" src={badRequest} alt="badRequest"></img>
      </div>
    );    
}
export default BadRequestPage;
