import React, { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import departmentService from "../services/departmentService";
import errorhandler from "../services/errorhandler";

const DepartmentUpdate=()=> {
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [data, setData] = useState({
        name:"",
        description:""        
    });

    const handleSubmit = (e) => {

     e.preventDefault();       
     departmentService.update(id,data)
     .then(res=> console.log(res.data),     
        navigate("/departments"),
        navigate(0))
     .catch(e=>
        navigate(errorhandler.handler(e)))
    };
    
    useEffect(() => {     
        departmentService.getById(id)
          .then((res) => setData(res.data))
          .catch(e=>
            navigate(errorhandler.handler(e)))          
      }, []);

    
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Name </label>                    
                    <input type="text" value={data.name}  onChange={(e)=>
                        setData(prevState => ({...prevState,name: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Description</label>
                    <input type="text" value={data.description}  onChange={(e)=>
                        setData(prevState => ({...prevState,description: e.target.value}))} required />
                </div>                
                <div className="button-container">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Update Department</div>
                { renderForm}
            </div>
        </div>
    );
}

export default DepartmentUpdate;