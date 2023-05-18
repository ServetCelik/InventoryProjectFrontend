import React, { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import employeeService from "../services/employeeService";
import errorhandler from "../services/errorhandler";

const RoleUpdate=()=> {
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const navigate = useNavigate();
    const [checkedAdmin, setCheckedAdmin] = useState(false);
    const [checkedHr, setCheckedHr] = useState(false);
    const [checkedDepot, setCheckedDepot] = useState(false);

    const handleSubmit = (e) => {

      e.preventDefault();
      
      const roles = [];
      const a =checkedAdmin ? roles.push("ADMIN"):null
      const b =checkedHr ? roles.push("HR"):null
      const c =checkedDepot ? roles.push("DEPOT_WORKER"):null

      employeeService.updateRole(id,{roles})
      .then(navigate("/employees"),
        navigate(0))
      .catch( e =>
          navigate(errorhandler.handler(e)))
    };

      const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };    

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>User Id </label>
                    <input type="text" value={id} readOnly required />
                </div>

                        <div><Checkbox
                        label="Admin"
                        value={checkedAdmin}
                        onChange={()=>setCheckedAdmin(!checkedAdmin)}/>
                        </div>
                
                        <div><Checkbox
                        label="Hr"
                        value={checkedHr}
                        onChange={()=>setCheckedHr(!checkedHr)}/>
                        </div>

                        <div><Checkbox
                        label="Depot Worker"
                        value={checkedDepot}
                        onChange={()=>setCheckedDepot(!checkedDepot)}/>
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
                <div className="title">Update Employee Role</div>
                {renderForm}
            </div>
        </div>
    );
}

export default RoleUpdate;







