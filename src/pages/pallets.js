import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RenderTable from "../components/renderTable";
import "./styles.css";
import NavigateButton from "../components/navigateButton";
import palletService from "../services/palletService";
import errorhandler from "../services/errorhandler";

const Pallets = () => {
  const navigate = useNavigate();
  const [pallets, setPallets] = useState([
    { id: 1, locationName: "Loc", productName: "Product",amount:0}
  ]);  
  const [stats, setStats] = useState([
    { product: "Product",amount:0}
  ]);  

  
  useEffect(() => {
    palletService.getAll()
      .then((res) => setPallets(res.data))
      .catch( e =>
        navigate(errorhandler.handler(e)))         
  }, []);
  useEffect(() => {
    palletService.getSumByProductName()
    .then((res) => setStats(res.data))
    .catch( e =>
      navigate(errorhandler.handler(e)))        
  }, []);
  useEffect(() => {
    palletService.getSumByLocationtName()    
  }, []);
  
  const titles =["Id","Location","Product","Amount"];

  const filterForm=(

    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" 
        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Total Items
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">

        <h3>Total amount of product per product type:</h3>
            <br></br> 
               {stats.map((stat) => (
                  <p key={stat.product} >Total {stat.product} : {stat.amount}</p>
                ))}
        </div>
      </div>
    </div>      
  </div>
  );


  return (

      <div>   
        <div>
          {filterForm}
        </div>    
        <div>
          <div>{<RenderTable titles={titles} products={pallets} path="/pallet"/>}</div> 
          <div>{<NavigateButton text="/pallet"/>}</div>
        </div>   
      </div>  
  );
  
};

export default Pallets;