import React from "react";
import Carousel from "react-bootstrap-carousel";
import CarouselContent from "../Helper/CarouselContent.jsx";

const data = [
    {
        heading:"Table of Contents-1",
        data:["Introduction","Defining Decoupled CMS","Platform Considerations","Decoupled Flexibility: Progressive vs. Fully Decoupled"],
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
    {
        heading:"Table of Contents-5",
        data:["Introduction","Defining Decoupled CMS","Platform Considerations","Decoupled Flexibility: Progressive vs. Fully Decoupled"],
    }
];
const Sidebar = () => {
    return (
        <div className=" right">
            <div className="">
                <Carousel
                    animation={true}
                    wrap={true}
                    indicators={true}
                    controls={false}
                    pauseOnHover={false}
                    slideshowSpeed={4000}
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
        </div>
    )
}

export default Sidebar