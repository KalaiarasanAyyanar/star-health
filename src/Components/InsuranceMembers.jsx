import React from "react";
import small1 from "../Images/star1.png"
import small2 from "../Images/star2.png"
import small3 from "../Images/star3.png"
const InsuranceMembers = () => {
    return (
        

          <div>
      <div className="container-fluid">
      
      <div className="row">
        <div className="col-sm-4" ></div>
        <div className="col-sm-4" >
        <h3 style={{color:"#35488a"}}>Myself</h3>
        <br></br>
        <p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>For Individuals aged between 18 to 65 years.</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>No capping on room rent - Treatment at Single Standard A/C room</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Hospital cash benefits</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Cover for over 400 day care procedures</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Free health check-up for every block of 3 claim free years.</p>
        
        </div>
        <div className="col-sm-4"  >
    
								<img  src={small1} alt="">
    </img>
      </div>
    </div>
    </div>
    <div className="container-fluid">
      
    <div className="row">
      <div className="col-sm-4" >
      <img  src={small2} alt="">
  </img>
      </div>
      <div className="col-sm-4" >
      <h3 style={{color:"#35488a"}}>My Family</h3>
      <br></br>
      <p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Affordable Health Insurance cover on a floater basis</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Covers Dental / ophthalmic treatments on OPD basis</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Upto 100% Increase in Sum Insured upon a claim free renewal</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Benefits include Air ambulance facility and availing Second medical opinion</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>No capping on room rent - Treatment at Single Standard A/C room</p>
      
      </div>
      <div className="col-sm-4"  >
  
            
    </div>
  </div>
  </div>
  <div className="container-fluid">
      
      <div className="row">
        <div className="col-sm-4" ></div>
        <div className="col-sm-4" >
        <h3 style={{color:"#35488a"}}>My Parents</h3>
        <br></br>
        <p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>For Senior citizens aged between 60 to 75 years.</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>No pre-insurance medical test required</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Covers pre-existing diseases from the second year onwards</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Medical Consultations as an Out Patient in a Network Hospital</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Guaranteed lifetime renewals</p>
        
        </div>
        <div className="col-sm-4"  >
    
        <img  src={small3} alt="">
    </img>
      </div>
    </div>
    </div>
   
  </div>
        
    )
}

export default InsuranceMembers;