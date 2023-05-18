import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "./components/navbar";
import Signin from "./pages/signin";
import MainPage from "./pages/mainpage";
import Signup from "./pages/signups"
import CreateDepartment from "./pages/CreateDepartment";
import CreateLocation from "./pages/CreateLocation";
import CreatePallet from "./pages/CreatePallet";
import CreateProduct from "./pages/CreateProduct"
import Footer from "./components/footer";
import Invoices from "./pages/invoices";
import Employees from "./pages/employees";
import Departments from "./pages/departments";
import Locations from "./pages/locations";
import Pallets from "./pages/pallets";
import Products from "./pages/products";
import LocationUpdate from "./pages/locationUpdate";
import PalletUpdate from "./pages/palletUpdate";
import DepartmentUpdate from "./pages/departmentUpdate";
import ProductUpdate from "./pages/productUpdate";
import UserUpdate from "./pages/userUpdate";
import RoleUpdate from "./pages/roleUpdate";
import LiveChat from "./pages/liveChat";
import UnAuthPage from "./pages/errorPages/unAuth";
import ForbiddenPage from "./pages/errorPages/forbidden";
import BadRequestPage from "./pages/errorPages/badRequest";
import ServerErrorPage from "./pages/errorPages/serverError";
import requireAuth from "./components/requireAuth";
import ErrorPage from "./pages/errorPages/errorPage";



function App (){
  
    return(
      <div className="overplay">
          <Router>
                <Navbar/>               
                <Routes>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/signin" element={<Signin/>}/>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/chat" element={<LiveChat/>}/>
                  <Route path="/product" element={<CreateProduct/>}/>
                  <Route path="/location" element={<CreateLocation/>}/>
                  <Route path="/department" element={<CreateDepartment/>}/>
                  <Route path="/pallet" element={<CreatePallet/>}/>
                  <Route path="/invoices" element={<Invoices/>}/>
                  <Route path="/employees" element={<Employees/>}/>
                  <Route path="/departments" element={<Departments/>}/>
                  <Route path="/locations" element={<Locations/>}/>
                  <Route path="/pallets" element={<Pallets/>} onEnter ={requireAuth }/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/locationupdate/"  element={<LocationUpdate/>}/>
                  <Route path="/palletupdate/"  element={<PalletUpdate/>}/>
                  <Route path="/departmentupdate/"  element={<DepartmentUpdate/>}/>
                  <Route path="/productupdate/"  element={<ProductUpdate/>}/>
                  <Route path="/userupdate/"  element={<UserUpdate/>}/>
                  <Route path="employees/roleupdate/"  element={<RoleUpdate/>}/>
                  <Route path="/unauth"  element={<UnAuthPage/>}/>
                  <Route path="/forbidden"  element={<ForbiddenPage/>}/>
                  <Route path="/badrequest"  element={<BadRequestPage/>}/>
                  <Route path="/servererror"  element={<ServerErrorPage/>}/>
                  <Route path="/errorpage"  element={<ErrorPage/>}/>                  
                  
                </Routes>
                
                <Footer/>   
            </Router>
      </div>
          );        
        
}
export default App;