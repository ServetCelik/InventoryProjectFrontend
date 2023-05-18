import React from 'react';
import inv from "../components/inv.jpg"
const MainPage=()=>{

  
    
    return(
   

      <div>

<div id="carouselExampleControls" className="carousel slide align-items-center" data-bs-ride="carousel">
  <div className="carousel-inner" style={{marginTop: 100}}>
    <div className="carousel-item active" >
    <img src={inv} className="d-block w-90 mx-auto" alt="warehouse"></img>    </div>
    <div className="carousel-item">
    <img src={inv} className="d-block w-90 mx-auto" alt="warehouse"></img>     </div>
    <div className="carousel-item">
    <img src={inv} className="d-block w-90 mx-auto" alt="warehouse"></img>     </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

    );    
}
export default MainPage;

