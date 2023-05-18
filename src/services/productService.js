import axios from "../api/axios";
import authHeader from "./authHeader";
const baseURL="http://localhost:8080/product/";


const getAll = () => {
  return axios.get(baseURL,{headers:authHeader()});
};

const getById = (id) => {
  return axios.get(baseURL+`${id}`, { headers: authHeader() });
};

const create = (data) => {
  return axios.post(baseURL+"save/", JSON.stringify({ ...data }),{headers:authHeader()});
};
const getFilteredProducts = (data) => { 
  return axios.get(baseURL+`filter/`+`${data.name==""?"blank":data.name}`+`/`+`${data.description==""?
  "blank":data.description}`+`/`+`${data.department==""?"blank":data.department}`,{headers:authHeader()});
};

const update = (id,data) => {
    return axios.put(baseURL+`${id}`, JSON.stringify({ ...data }),{headers:authHeader()});
};

const remove = (id) => {
  return axios.delete(baseURL+`${id}`, { headers: authHeader() });
};


export default {
   getAll,
   getById,
   create,
   update,
   remove,
   getFilteredProducts
};


