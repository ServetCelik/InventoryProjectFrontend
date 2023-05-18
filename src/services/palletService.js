import axios from "../api/axios";
import authHeader from "./authHeader";
const baseURL="http://localhost:8080/pallet/";


const getAll = () => {
  return axios.get(baseURL,{headers:authHeader()});
};

const getById = (id) => {
  return axios.get(baseURL+`${id}`, { headers: authHeader() });
};
const getSumByProductName = () => {
  return axios.get(baseURL+"byProduct/", { headers: authHeader() });
};
const getSumByLocationtName = () => {
  return axios.get(baseURL+"byLocation/", { headers: authHeader() });
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


export default {
   getAll,
   getById,
   create,
   update,
   remove,
   getSumByProductName,
   getSumByLocationtName
};
