import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RenderTable from "../components/renderTable";
import "./styles.css";
import NavigateButton from "../components/navigateButton";
import productService from "../services/productService";
import errorhandler from "../services/errorhandler";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    { id: 1, name: "Name", description: "Desc", department: "Dep", Weight:"Weight",Width:"Width",Lenght:"Length",Height:"Height" }
  ]);
  const [data, setData] = useState(
    { name: "", description: "", department: "" }
  );
  
  useEffect(() => {
    productService.getAll()
      .then((res) => setProducts(res.data))
      .catch( e =>
        navigate(errorhandler.handler(e)))
  }, []);
 
  const titles =["Id","Name","Description","Department","Weight","Width","Lenght","Height"];

  const handleFilter = (e) => {

    e.preventDefault();
     productService.getFilteredProducts(data)
     .then((res) => 
     res ? setProducts(res.data): alert("No products were found matching your selection" ))
     .catch( e =>
        navigate(errorhandler.handler(e)))
};



  const filterForm=(

    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Filter Product
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">

        
        <div className="form">
            <form onSubmit={handleFilter}>
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <label>Name &emsp;: &emsp;</label>                    
                    <input type="text" value={data.name}  onChange={(e)=>setData(prevState => ({...prevState,name: e.target.value}))} />
                </div>
                <div className="d-flex justify-content-start">
                    <label>Description &emsp; : &emsp; </label>
                    <input type="text" value={data.description}  onChange={(e)=>setData(prevState => ({...prevState,description: e.target.value}))} />
                </div> 
                <div className="d-flex justify-content-start">
                    <label>Department &emsp; : &emsp; </label>                    
                    <input type="text" value={data.department}  onChange={(e)=>setData(prevState => ({...prevState,department: e.target.value}))} />
                </div>
                </div>     
                <br></br>   
                <div className="button-container">
                <button type="submit" className="btn btn-primary">Lets filter</button>
                </div>
            </form>         
        </div>    
  
        </div>
      </div>
    </div>      
  </div>
  );


  const table = (
    <div>
    <div>{<RenderTable titles={titles} products={products} path="/product"/>}</div>
    <div>{<NavigateButton text="/product"/>}</div>
    </div> 
  );



  return (
    <div>
        <div>
          {filterForm}
        </div>
        <div>
          {table}
        </div>
    </div>
    );
};

export default Products;

