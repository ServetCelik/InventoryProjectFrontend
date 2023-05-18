import React from "react";
import unAuth from "../../components/401.jpeg"

const UnAuthPage=()=>{
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
       <img className="d-flex p-2" src={unAuth} alt="unAuth"></img>
      </div>
    );    
}
export default UnAuthPage;
