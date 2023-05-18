import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RenderTable from "../components/renderTable";
import "./styles.css";
import NavigateButton from "../components/navigateButton";
import locationService from "../services/locationService";
import errorhandler from "../services/errorhandler";

const Locations = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState([
    { id: 1, name: "Name", address: "Address", maxPallet: "Max"}
  ]);
  
  useEffect(() => {
    locationService.getAll()
      .then((res) => setLocation(res.data))
      .catch( e =>
        navigate(errorhandler.handler(e)))
  }, []);
  const titles =["Id","Name","Address","Max Pallet"];


  return (<div>
    <div>{<RenderTable titles={titles} products={location} path="/location"/>}</div>
    <div>{<NavigateButton text="/location"/>}</div>
    </div> );
};

export default Locations;

