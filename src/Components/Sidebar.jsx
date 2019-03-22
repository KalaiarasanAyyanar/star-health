import React from "react";
import Carousel from "react-bootstrap-carousel";
import CarouselContent from "../Helper/CarouselContent.jsx";

const data = [
    {
        heading:"Why Star Health Insurance ?",
        data:["Hassle-free and customer-friendly direct claim settlement without intervention of TPA","Largest Network hospital base of over 8800+ hospitals","5,46,788 claims settled in the financial year 2017-2018","Rs. 1970.26 Crs of claims settled in the financial year 2017-2018","93% of cashless claims settled in less than 2 hours"],
    },
    {
        heading:"Table of Contents-2",
        data:["Introduction","Defining Decoupled CMS","Platform Considerations","Decoupled Flexibility: Progressive vs. Fully Decoupled"],
    },
    {
        heading:"Table of Contents-3",
        data:["Introduction","Defining Decoupled CMS","Platform Considerations","Decoupled Flexibility: Progressive vs. Fully Decoupled"],
    },
    {
        heading:"Table of Contents-4",
        data:["Introduction","Defining Decoupled CMS","Platform Considerations","Decoupled Flexibility: Progressive vs. Fully Decoupled"],
    },
   
];
const Sidebar = () => {
    return (
        <div className=" right">
            
                <Carousel
                    animation={false}
                    wrap={true}
                    indicators={true}
                    controls={false}
                    pauseOnHover={false}
                    slideshowSpeed={3000}
                    autoplay={true}
                    defaultActiveIndex={0}
                >
                    {
                        data.map((prop,key) => {
                            return (
                                <CarouselContent key={key} content={prop}/>
                                );
                        })

                    }
                </Carousel>

        </div>
    )
}

export default Sidebar