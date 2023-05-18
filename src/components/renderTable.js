import React from "react";
import "../pages/styles.css"
import RenderButton from "./renderButton";
const RenderTable=({titles,products,path})=>{
  
    return(
        <table className="table table-hover">
        <thead>
        <tr>
            
        {titles.map((title) => (
            <th className="col-1" key={title}>{title}</th>
        ))} 
        <th className="col-2">Operations</th>           
        </tr>
        </thead>
        <tbody>
        {products.map((product) => (                        
            <tr key={product.id} className="table-active">
                {Object.values(product)
                .map((item)=>(<td key={Math.random()}>{item.constructor === Array ? item.join(',') : item}</td>)
                )}
            
            <td >{<RenderButton id={product.id} path={path}/>}</td>
            </tr>            
        ))}
        </tbody>
    </table>
    );    
}

export default RenderTable;





  // const renderButtons =(id)=>(
    //     <div key={id}>
    //     <button type="button" className="btn btn-outline-success" onClick={() => console.log(`Item with id of ${id}  is Selected`)}>Open</button>
    //     <button type="button" className="btn btn-outline-primary" onClick={() => console.log(`Item with id of ${id}  is Updated`)}>Update</button>
    //     <button type="button" className="btn btn-outline-danger" onClick={() => console.log(`Item with id of ${id}  is Deleted`)}>Delete</button>
    //     </div>
    //   );
