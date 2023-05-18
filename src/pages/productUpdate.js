import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import productService from "../services/productService";
import departmentService from "../services/departmentService";
import errorhandler from "../services/errorhandler";

const ProductUpdate = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  
  const [data, setData] = useState({
    name: "",
    description: "",
    weight: 0,
    width: 0,
    length: 0,
    height: 0,
    departmentId: 0,
  });

  const [deps,setDeps] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
      productService.update(id,data)
      .then((res) => console.log(res),
        navigate("/products"),
        navigate(0))
     .catch( e =>
        navigate(errorhandler.handler(e)))
  };
  useEffect(() => {
     productService.getById(id)
      .then((res) => setData(res.data))
      .catch( e =>
        navigate(errorhandler.handler(e)))
  }, []);
  useEffect(() => {
    departmentService.getAll()
       .then((res) => setDeps(res.data))
       .catch( e =>
        navigate(errorhandler.handler(e)))
  }, []);


const renderForm = (
<div className="app">
  <div className="login-form">
    <div className="title">Update Product</div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name </label>

          <input type="text" value={data.name} onChange={(e) =>
              setData((prevState) => ({...prevState, name: e.target.value, })) } required/>
        </div>
        <div className="input-container">
          <label>Description</label>
          <input type="text" value={data.description} onChange={(e) =>
              setData((prevState) => ({...prevState, description: e.target.value,}))} required/>
        </div>
        <div className="input-container">
          <label>Weight </label>
          <input type="number" value={data.weight} onChange={(e) =>
              setData((prevState) => ({...prevState, weight: e.target.value,}))} required />
        </div>
        <div className="input-container">
          <label>width</label>
          <input type="number" value={data.width} onChange={(e) =>
              setData((prevState) => ({...prevState, width: e.target.value,}))} required />
        </div>
        <div className="input-container">
          <label>Lenght </label>
          <input type="number" value={data.length} onChange={(e) =>
              setData((prevState) => ({...prevState, length: e.target.value,}))} required />
        </div>
        <div className="input-container">
          <label>Height </label>
          <input type="number" value={data.height} onChange={(e) =>
              setData((prevState) => ({...prevState, height: e.target.value,}))} required />
        </div>
        <div>
        <label>Department Name</label>
        <select className="form-select form-select-sm" aria-label=".form-select-sm example"
        onChange={(e) => setData((prevState) => ({...prevState, departmentName: e.target.value, }))}>
        <option defaultValue>Select a department</option>     
        {deps.map((dep)=>(
          <option value={dep.name}>{dep.name}</option>
        ))}
        </select>
        </div>
        <div className="button-container">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
);


  return (<div>{ renderForm}</div>);
};

export default ProductUpdate;




