import React, { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import userService from "../services/userService";
import errorhandler from "../services/errorhandler";

const UserUpdate=()=> {
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState({
        name:"",
        lastName:"",
        userName:"",
        email:"",
        password:""
    });
    

    const handleSubmit = (e) => {

      e.preventDefault();
       userService.update(id,data)
      .then(res=> console.log(res.data),
        navigate("/"))
      .catch( e =>
            navigate(errorhandler.handler(e)))       
    };
    useEffect(() => {
      userService.getById(id)
          .then((res) => setData(res.data))
          .catch( e =>
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
                    <label>Last Name </label>
                    <input type="text" value={data.lastName}  onChange={(e)=>
                        setData(prevState => ({...prevState,lastName: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>UserName </label>
                    <input type="text" value={data.userName}  onChange={(e)=>
                        setData(prevState => ({...prevState,userName: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" value={data.email}  onChange={(e)=>
                        setData(prevState => ({...prevState,email: e.target.value}))} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={data.password}  onChange={(e)=>
                        setData(prevState => ({...prevState,password: e.target.value}))} required />
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
                <div className="title">SignUp</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default UserUpdate;









        // const headers = {
        //     'Content-Type': 'application/json'
        // };
    
        //  axios.post(
        //     'http://localhost:8080/user/login',
        //     {                         
        //             // "name": data.name,
        //             // "password": data.password
        //             data
        
        //     },
        //     {headers}
        //     ).then(response => {
        //         console.log("Success ========>", response);
        //     })
        //     .catch(error => {
        //         console.log("Error ========>", error);
        //     }
        // )  