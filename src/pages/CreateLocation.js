import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import locationService from "../services/locationService";
import errorhandler from "../services/errorhandler";

const CreateLocation=()=> {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [data, setData] = useState({
        name:"",
        address:"",
        maxPallet:""
    });   


const handleSubmit = (e) => {

    e.preventDefault();
   
 locationService.create(data)
 .then(res=> console.log(res.data),
    navigate("/locations"),
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
                        ({...prevState,name: e.target.value}))} required data-cy="locNameInput" />
                </div>
                <div className="input-container">
                    <label>Address</label>
                    <input type="text" value={data.address}  onChange={(e)=>setData(prevState => 
                        ({...prevState,address: e.target.value}))} required data-cy="locAdressInput" />
                </div>
                <div className="input-container">
                    <label>MaxPallet </label>
                    <input type="number" value={data.maxPallet}  onChange={(e)=>setData(prevState => 
                        ({...prevState,maxPallet: e.target.value}))} required data-cy="locCapacityInput"/>
                </div>
                <div className="button-container">
                <button type="submit" className="btn btn-primary" data-cy="createLocSubmit" >Submit</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Create New Location</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default CreateLocation;







