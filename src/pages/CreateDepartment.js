import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import departmentService from "../services/departmentService";
import errorhandler from "../services/errorhandler";

const CreateDepartment=()=> {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:"",
        description:""        
    });
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        departmentService.create(data)
     .then(res=> console.log(res.data),
        navigate("/departments"),
        navigate(0))
     .catch(e=>
        navigate(errorhandler.handler(e))
      )     
    };
    

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>                    
                    <input type="text" value={data.name}  onChange={(e)=>setData(prevState => 
                        ({...prevState,name: e.target.value}))} required data-cy="depNameInput" />
                </div>
                <div className="input-container">
                    <label>Description</label>
                    <input type="text" value={data.description}  onChange={(e)=>setData(prevState => 
                        ({...prevState,description: e.target.value}))} required data-cy="depDescInput"/>
                </div>                
                <div className="button-container">
                <button type="submit" className="btn btn-primary" data-cy="createDepSubmit" >Submit</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Create New Department</div>
                {renderForm}
            </div>
        </div>
    );
}

export default CreateDepartment;

