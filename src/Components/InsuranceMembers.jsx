import React from "react";
import small1 from "../Images/star1.png"
import small2 from "../Images/star2.png"
import small3 from "../Images/star3.png"
const members = [
  {
    heading: "Myself",
    data: ["For Individuals aged between 18 to 65 years.", "No capping on room rent - Treatment at Single Standard A/C room", "Hospital cash benefits", "Cover for over 400 day care procedures", "Free health check-up for every block of 3 claim free years."]
  },
  {
    heading: "My Family",
    data: ["Affordable Health Insurance cover on a floater basis", "Covers Dental / ophthalmic treatments on OPD basis", "Upto 100% Increase in Sum Insured upon a claim free renewal", "Benefits include Air ambulance facility and availing Second medical opinion", "No capping on room rent - Treatment at Single Standard A/C room"]
  },
  {
    heading: "My Parents",
    data: ["For Senior citizens aged between 60 to 75 years.", "No pre-insurance medical test required", "Covers pre-existing diseases from the second year onwards", "Medical Consultations as an Out Patient in a Network Hospital", "Guaranteed lifetime renewals"]
  }
]
const InsuranceMembers = () => {
  return (


    <div>
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-4" ></div>
          <div className="col-sm-4" >
            <h3 style={{ color: "#35488a" }}>{members[0].heading}</h3>
            <br></br>
            {members[0].data.map((text) => {
              return (<p style={{ fontSize: "17px", fontWeight: "400", color: "black" }}>{text}</p>);
            })
            }

          </div>
          <div className="col-sm-4"  >

            <img src={small1} alt="">
            </img>
          </div>
        </div>
      </div>
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-4" >
            <img src={small2} alt="">
            </img>
          </div>
          <div className="col-sm-4" >
            <h3 style={{ color: "#35488a" }}>{members[1].heading}</h3>
            <br></br>
            {members[1].data.map((text) => {
              return (<p style={{ fontSize: "17px", fontWeight: "400", color: "black" }}>{text}</p>);
            })
            }

          </div>
          <div className="col-sm-4"  >


          </div>
        </div>
      </div>
      <div className="col-sm-4"  >
  
            
    </div>
  </div>
  </div>
  <div className="container-fluid">
      
      {/* <div className="row">
        <div className="col-sm-4" ></div>
        <div className="col-sm-4" >
        <h3 style={{color:"#35488a"}}>My Parents</h3>
        <br></br>
        <p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>For Senior citizens aged between 60 to 75 years.</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>No pre-insurance medical test required</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Covers pre-existing diseases from the second year onwards</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Medical Consultations as an Out Patient in a Network Hospital</p>
<p style={{fontSize:"17px",fontWeight:"500",color:"black"}}>Guaranteed lifetime renewals</p>
        
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-4" ></div>
          <div className="col-sm-4" >
            <h3 style={{ color: "#35488a" }}>{members[2].heading}</h3>
            <br></br>
            {members[2].data.map((text) => {
              return (<p style={{ fontSize: "17px", fontWeight: "400", color: "black" }}>{text}</p>);
            })
            }
          </div>
          <div className="col-sm-4"  >

            <img src={small3} alt="">
            </img>
          </div>
        </div>
      </div>
    </div> */}
    </div>
   
  </div>
        
    )

    </div>

  )
}

export default InsuranceMembers;