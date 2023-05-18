import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import palletService from "../services/palletService";
import locationService from "../services/locationService";
import productService from "../services/productService";
import errorhandler from "../services/errorhandler";


const CreatePallet=()=> {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [locations,setLocations] = useState([]);
    const [products,setProducts] = useState([]);

    const [data, setData] = useState({
        amount:0,
        locationName:"",
        productName:""
    });    

    const handleSubmit = (e) => {

     e.preventDefault();
       
     palletService.create(data)
     .then(res=> console.log(res.data),
        navigate("/pallets"),
        navigate(0))
     .catch(e=>
        navigate(errorhandler.handler(e))
      )  

    };
    useEffect(() => {
        locationService.getAll()
           .then((res) => setLocations(res.data))
           .catch(e=>
                navigate(errorhandler.handler(e))
          )
      }, []);
      useEffect(() => {
        productService.getAll()
           .then((res) =>setProducts(res.data))
           .catch(e=>
                navigate(errorhandler.handler(e))
          )
      }, []);


    
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Amount </label>
                    <input type="number" value={data.amount}  onChange={(e)=>setData(prevState => 
                        ({...prevState,amount: e.target.value}))} required />
                </div>

                
                <div>
                    <label>Location Name</label>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                    onChange={(e) => setData((prevState) => ({
                    ...prevState, locationName: e.target.value,
                }))}>
                <option defaultValue >Select a location</option>  
                {locations.map((loc)=>(
                <option value={loc.name}>{loc.name}</option>
                ))}
                </select>
                </div>
                
                <div>
                    <label>Product Name</label>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                    onChange={(e) => setData((prevState) => ({
                    ...prevState, productName: e.target.value,
                }))} required>
                 <option defaultValue >Select a Product</option>   
                {products.map((product)=>(
                <option value={product.name} key={product.name}>{product.name}</option>
                ))}
                </select>
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
                <div className="title">Create New Pallet</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default CreatePallet;