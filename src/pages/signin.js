import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import userService from "../services/userService";
import authService from "../services/authService";
import errorhandler from "../services/errorhandler";

const Signin=()=> {
    const navigate = useNavigate();
    const [result, setResult] = useState(false);

    const [data, setData] = useState({
        name:"",
        password:""
    });   
    

    const handleSubmit = async(e) => {

        e.preventDefault();   

        userService.login(data)
        .then(res=> 
            res.data ? (authService.saveAuth(res.data), navigate("/")): null
            )        
        .catch( e =>
           e.response.data === "Invalid Credentials" || "User not found" ? (alert("Wrong credentials") ,
           setData(prevState => ({...prevState, password: "", name: ""}))) 
           : 
           navigate(errorhandler.handler("/errorpage"))
           )
    };

    const popupAlert=(
        <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="alert alert-dismissible alert-success" onClick={()=>setResult(false)} >            
            <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
        </div>
        </div>
    );
 
    const renderForm = (
        <div className="app">
            <div className="login-form">
                <div className="title">Login</div>
                    <div className="form">
                        <form onSubmit={handleSubmit} data-cy="submitLogin">
                            <div className="input-container">
                                <label>Name </label>                    
                                <input type="text" value={data.name}  onChange={(e)=>
                                    setData(prevState => ({...prevState,name: e.target.value}))} required data-cy="name" />
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" value={data.password}  onChange={(e)=>
                                    setData(prevState => ({...prevState,password: e.target.value}))} required data-cy="pass" />
                            </div>                
                            <div className="button-container">
                            <button type="submit" className="btn btn-primary" data-cy="btnSubmit">Submit</button>                    
                            </div>
                        </form>
                                              
                    </div>
                </div>
            </div>       
    );

    return (
            <div>
                {result ? <div>{popupAlert}</div>:<div>{renderForm}</div>}
            </div>
    );
}

export default Signin;


