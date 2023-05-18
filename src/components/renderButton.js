import React from "react";
import "../pages/styles.css"
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import authHeader from "../services/authHeader";

const RenderButton=({id,path})=>{
  const navigate = useNavigate();

      const handleDelete = (e) => {
        e.preventDefault(); 

        axios
          .delete(`http://localhost:8080${path}/${id}`,{ headers: authHeader() })
          .then((res) => console.log(res),
          navigate(0))
          .catch(function (error) {
            console.log(error.response.data)        
          })
      
      };
        
    return(
        <div key={id}>
        <button type="button" className="btn btn-outline-success" onClick={() => navigate(`${path}update?id=${id}`)}>Update</button>
        <button type="button" className="btn btn-outline-danger" data-cy="deleteButton" onClick={(e) => handleDelete(e)}>Delete</button>
        </div>
    );    
}

export default RenderButton;
