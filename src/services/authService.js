
const saveAuth = (data) => {
  localStorage.clear();
        localStorage.setItem("token", JSON.stringify(data.accessToken));
        localStorage.setItem("user", JSON.stringify(data.userName));     
        localStorage.setItem("roles", JSON.stringify(data.roles));        
      
};

const logout = () => {
    localStorage.clear();
};



const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
};
const hasRole = (text) => {
  if(localStorage.getItem('roles').includes(text)){
    return true;
  }
  return false;
};


export default {
  saveAuth,
  logout,
  getToken,
  hasRole
};

