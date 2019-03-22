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
<<<<<<< HEAD
                            <div key={key} className="carousel-content-data">
=======
                            <div>
                            <div className="carousel-content-data" style={{fontSize:"15px"}}>
>>>>>>> a49c2f30ad43cfd44987648b4cea7ce87cf68f76
                            {text}
                            </div>
                            <br></br>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default CarouselContent;