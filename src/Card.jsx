import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/i.jpg";


const Card =(props)=>{
    return(
        <>
       
        <div className="col md-4 col-10 mx-auto">
        <div className="card" >
       
  <div class="card-header">
    Featured
  </div>
 
    
    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
    <div class="card-body">
    <h5 class="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>


  </div>
  
 
        
      
        </>
    );
};
export default Card;