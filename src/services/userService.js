import axios from "../api/axios";
import authHeader from "./authHeader"
const baseURL="http://localhost:8080/user/";


const getAll = () => {
  return axios
  .get(baseURL,{headers:authHeader()});
};

const getById = (id) => {
  return axios.get(baseURL+`${id}`, { headers: authHeader() });
};

const signUp = (data) => {
  return axios.post(baseURL+"save/", JSON.stringify({ ...data }),{headers:authHeader()});
};
const login = (data) => {
  return axios.post(baseURL+"login/", JSON.stringify({ ...data }),{headers:authHeader()});
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
   signUp,
   login,
   update,
   remove
};
