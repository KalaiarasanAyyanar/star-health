import React from "react";

const CarouselContent = (props) =>{
    return(
        <div>
            <div className="carousel-content-heading">
                {props.content.heading}
            </div>
            <div className="carousel-content-data-container">
                {
                    props.content.data.map((text,key)=>{
                        return(
                            <div key={key} className="carousel-content-data">
                            {text}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CarouselContent;