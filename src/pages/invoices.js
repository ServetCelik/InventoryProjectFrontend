import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import invoiceService from "../services/invoiceService";
import errorhandler from "../services/errorhandler";

const Invoices = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([
    { id: 1, productId: 1, productName: "None", locationName: "None", amount: "None", date: "None"}
  ]);
  const [selectedItemId, setSelectedItemId] = useState(16);
  const [startDate, setStartDate] = useState("2000-01-02T20:11:00.455317");
  const [endDate, setEndDate] = useState("2023-01-14T20:11:00.455317");
  const [information, setInformation] = useState([]);


  useEffect(() => {
    invoiceService.getAll()
      .then((res) => setInvoices(res.data))      
      .catch( e =>
        navigate(errorhandler.handler(e)))
  }, []);

  useEffect(() => {
    invoiceService.getInfoById(selectedItemId,startDate,endDate)
      .then((res) => setInformation(res.data))   
      .catch( e =>
        navigate(errorhandler.handler(e)))
  }, [selectedItemId,startDate,endDate  ]);


  const titles =["Product Name","Location Name","Amount","Date","Details"];

  const table=(
    <table className="table table-hover">
    <thead>
    <tr>
        
    {titles.map((title) => (
        <th className="col-1" key={title}>{title}</th>
    ))}
    </tr>
    </thead>
    <tbody>
    {invoices.map((invoice) => (                        
        <tr key={invoice.id} className="table-active">
            <td key={Math.random() }>{invoice.productName}</td>
            <td key={Math.random() }>{invoice.locationName}</td>
            <td key={Math.random() }>{invoice.amount}</td>
            <td key={Math.random() }>{invoice.date.slice(0,10)}</td>
            <td ><button type="button" className="btn btn-outline-success" 
        onClick={() => setSelectedItemId(invoice.productId)}>Get Details</button></td>         
        </tr>            
    ))}
    </tbody>
</table>
    );


  return(
    <div>
      <div className="square border border-danger" style={{ margin: `5px` ,padding: `5px`}}>
      {information.map(
        info=><h3 key ={info}>{info}</h3>
      )}
      </div>

      <div className="d-flex justify-content-around" style={{ margin: `15px` }}>
        <div >
          <label>Start date:</label>
          <input type="date"  name="datemin" min="2000-01-02"
             value={startDate} onChange={e => setStartDate(e.target.value+"T20:11:00.455317")}></input>
        </div>
        <div>
          <label>End date:</label>
           <input type="date" name="datemin" max="2030-01-02"
              value={endDate} onChange={e => setEndDate(e.target.value+"T20:11:00.455317")}></input>
        </div>      
      </div>
      <div>        
        {table}
    </div>

    </div>
    
    
);   
};

export default Invoices;
