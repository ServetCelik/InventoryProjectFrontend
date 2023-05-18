import axios from "../api/axios";
import authHeader from "./authHeader";
const baseURL="http://localhost:8080/invoice/";


const getAll = () => {
  return axios.get(baseURL,{headers:authHeader()});
};

const getInfoById = (id,startDate,endDate) => {
  return axios.get(baseURL+`${id}`+"/"+`${startDate}`+"/"+`${endDate}`, { headers: authHeader() });
};




export default {
   getAll,
   getInfoById
};

