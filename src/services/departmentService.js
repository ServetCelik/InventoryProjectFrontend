import axios from "../api/axios";
import authHeader from "./authHeader";
const baseURL="http://localhost:8080/department/";


const getAll = () => {
  return axios.get(baseURL,{headers:authHeader()})  
};

const getById = (id) => {
  return axios.get(baseURL+`${id}`, { headers: authHeader() });
};

const create = (data) => {
  return axios.post(baseURL+"save/", JSON.stringify({ ...data }),{headers:authHeader()});
};

const update = (id,data) => {
    return axios.put(baseURL+`${id}`, JSON.stringify({ ...data }),{headers:authHeader()});
};

const remove = (id) => {
  return axios.delete(baseURL+`${id}`, { headers: authHeader() });
};

// const getByDepartment = name => {
//   return http.get(`/departments/employees?department=${name}`, { headers: header });
// };

// const getByName = name => {
//   return http.get(`/departments/department?name=${name}`, { headers: header });
// };


export default {
   getAll,
   getById,
   create,
   update,
   remove
};

