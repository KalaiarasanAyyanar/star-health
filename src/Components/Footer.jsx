import React from "react";
const footer=[
    {
        Address:["No 1,New Tank Street ,Valluvarkottam High Road,Nungambakkam,Chennai 600034.","CIN NO:U660101N2005PLC056649"]
    }
]


const Footer = () => {
    return (


        <div style={{ backgroundColor: "#0d0d0d", color: "white" }}>
            <br></br>
            <br></br>
            <p style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>REGISTERED &amp; CORPORATE OFFICE :</p>

            <br></br>
            <p style={{ float: "right", marginRight: "110px", marginLeft: "100px" }}>Copyright &copy; 2019.Star Insurance .All rights reserved</p>
     {
    footer[0].Address.map((text)=>{
        return(
            <p style={{ marginTop: "0px", marginBottom: "0px", marginLeft: "100px" }}>{text}</p>
           
        )
    })
}
            <br></br>
        </div>
    )
}

export default Footer;