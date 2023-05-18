import React, { useState, useEffect } from "react";
import RenderTable from "../components/renderTable";
import "./styles.css";
import NavigateButton from "../components/navigateButton";
import departmentService from "../services/departmentService";
import { useNavigate } from "react-router-dom";
import errorhandler from "../services/errorhandler";


const Departments = () => {
  const navigate = useNavigate();
  const [dep, setDep] = useState([
    { id: 1, name: "Name", description: "Desc"}
  ]);
  
  useEffect(() => {
    departmentService.getAll()
      .then((res) => setDep(res.data))
      .catch( e =>
        navigate(errorhandler.handler(e))
      )
  }, []);
  const titles =["Id","Name","Description"];

  return (
    <div>
  <div>{<RenderTable titles={titles} products={dep} path="/department"/>}</div>
  <div>{<NavigateButton text="/department"/>}</div>
  </div>
  );
};

export default Departments;