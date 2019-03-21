import React from "react";
import Carousel from "react-bootstrap-carousel";
import CarouselContent from "../Helper/CarouselContent.jsx";

const data = ["The 1896 Cedar Keys hurricane was a powerful tropical cyclone that devastated much of the East Coast of the United States, starting with Florida's Cedar Keys, near the end of September. The storm's rapid movement allowed it to maintain much of its intensity after landfall, becoming one of the costliest United States hurricanes at the time. The fourth tropical cyclone of the 1896 Atlantic hurricane season, it washed out the railroad connecting the Cedar Keys to the mainland with a 10.5 ft ", "(3.2 m) storm surge, and submerged much of the island group (Cedar Key flooding pictured). The hurricane killed at least 70 people in mainland Florida, and razed 5,000 sq mi (13,000 km2) of dense pine forests in the northern part of the state. In Savannah, Georgia, fierce winds unroofed thousands of structures. In Washington, D.C., the White House grounds were left in disarray. Monuments at the Gettysburg Battlefield were damaged. Along the storm's path, it caused at least 202 deaths.", "A biography, or simply bio, is a detailed description of a person's life. It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of his or her life, including intimate details of experience, and may include an analysis of the subject's personality.", "Biographical works are usually non-fiction, but fiction can also be used to portray a person's life. One in-depth form of biographical coverage is called legacy writing. Works in diverse media, from literature to film, form the genre known as biography."];
const Sidebar = () => {
    return (
        <div className=" right">
            
                <Carousel
                    animation={true}
                    wrap={true}
                    indicators={true}
                    controls={false}
                    pauseOnHover={false}
                    slideshowSpeed={2000}
                    autoplay={false}
                    defaultActiveIndex={0}
                
                >
                    {
                        data.map((prop,key) => {
                            return (
                                <div key={key} className="sidebar-carousel-content">
                                {
                                    prop
                                }
                                </div>
                                );
                        })

                    }
                </Carousel>

        </div>
    )
}

export default Sidebar