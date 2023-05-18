import axios from "../api/axios";
import authHeader from "./authHeader"
const baseURL="http://localhost:8080/employee/";


const getAll = () => {
  return axios
  .get(baseURL,{headers:authHeader()});
};

const getById = (id) => {
  return axios.get(baseURL+`${id}`, { headers: authHeader() });
};
const updateRole = (id,roles) => {
   return axios.put(baseURL+`${id}`, JSON.stringify({ ...roles }), { headers: authHeader() });
};
const getFilteredProducts = (data) => {   
  return axios.get(baseURL+`filter/`+`${data.name==""?"blank":data.name}`+`/`+`${data.lastName==""?"blank":data.lastName}`+`/`+`${data.email==""?"blank":data.email}`+`/`+`${data.role=="Any"?"blank":data.role}`,{headers:authHeader()});
};

export default {
   getAll,
   getById,
   updateRole,
   getFilteredProducts
};



