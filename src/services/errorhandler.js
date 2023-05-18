
const handler = (error) => {
  
  if (error.response.status==401) {
   return "/unauth"
  } else if (error.response.status==403) {
   return "/forbidden"
  } else if (error.response.status==404) {
    return "/badrequest"
  }else if (error.response.status==500) {
   return "/servererror"
  }else {
   
    return "/errorpage"
  }
};

export default {handler};


