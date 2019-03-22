import React from "react";

const CarouselContent = (props) =>{
    return(
        <div>
            
            <div className="carousel-content-heading" style={{fontSize:"24px"}}>
                {props.content.heading}
            </div>
            <div className="carousel-content-data-container">
                {
                    props.content.data.map((text,key)=>{
                        return(
                            <div key={key} className="carousel-content-data">
                            <div>
                            <div key={key} className="carousel-content-data" style={{fontSize:"15px"}}>
                            {text}
                            </div>
                            <br></br>
                            </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CarouselContent;