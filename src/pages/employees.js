import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import employeeService from "../services/employeeService";
import errorhandler from "../services/errorhandler";

const Employees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    { id: 1, two: "Name", three: "Last Name", four: "Email", five: ["Roles"]}
  ]);
  const [data, setData] = useState(
    { name: "", lastName: "", email: "",role: "Any" }
  );

  useEffect(() => {
    employeeService.getAll()
      .then((res) => setEmployees(res.data))
      .catch( e =>
        navigate(errorhandler.handler(e)))
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
     employeeService.getFilteredProducts(data)
      .then((res) => res ? 
        setEmployees(res.data): alert("No employee were found matching your selection" ))
      .catch( e =>
         navigate(errorhandler.handler(e)))
};

  const titles =["Id","Name","LastName","Email","Roles"];

  const table=(
    <table className="table table-hover">
    <thead>
    <tr>
        
    {titles.map((title) => (
        <th className="col-1" key={title}>{title}</th>
    ))} 
    <th className="col-2">Operations</th>           
    </tr>
    </thead>
    <tbody>
    {employees.map((employee) => (                        
        <tr key={employee.id} className="table-active">
            {Object.values(employee)
            .map((item)=>(<td key={item}>{item.constructor === Array ? item.join(',') : item}</td>)
            )}
        
        <td ><button type="button" className="btn btn-outline-success" 
        onClick={() => navigate(`roleupdate?id=${employee.id}`)}>Update Role</button></td>
        </tr>            
    ))}
    </tbody>
</table>
    );


    const filterForm=(

      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseOne"   
                  aria-expanded="false" 
                  aria-controls="collapseOne"
                  >
            Filter Product
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" 
        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
  
          
          <div className="form">
              <form onSubmit={handleFilter}>
              <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-start">
                      <label>Name &emsp;: &emsp;</label>                    
                      <input type="text" value={data.name}  onChange={(e)=>
                        setData(prevState => ({...prevState,name: e.target.value}))} />
                  </div>
                  <div className="d-flex justify-content-start">
                      <label>Last Name &emsp; : &emsp; </label>
                      <input type="text" value={data.lastName}  onChange={(e)=>
                        setData(prevState => ({...prevState,lastName: e.target.value}))} />
                  </div> 
                  <div className="d-flex justify-content-start">
                      <label>Email &emsp; : &emsp; </label>                    
                      <input type="text" value={data.email}  onChange={(e)=>
                        setData(prevState => ({...prevState,email: e.target.value}))} />
                  </div>

                  <div>
                    <label>Role</label>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example"
                    onChange={(e) => setData((prevState) => ({...prevState, role: e.target.value, }))}>
                 <option defaultValue>Any</option>   
                
                <option value={"ADMIN"}>{"ADMIN"}</option>
                <option value={"DEPOT_WORKER"}>{"DEPOT_WORKER"}</option>
                <option value={"HR"}>{"HR"}</option>
                
                </select>
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


  return(
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

export default Employees;