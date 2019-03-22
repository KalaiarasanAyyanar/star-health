import React from "react";

const TitleAndText = (props) => {
    return (
        <div className="title-and-text">
            <div className="title-and-text--title" style={{fontSize:"24px"}}>
                {props.title}
            </div>
            {
                (props.breifData) &&
                    <div className="title-and-text--text-breifData" style={{ fontSize: "20px", fontWeight: "500", color: "black" }}>
                        {props.breifData}
                    </div>
                
            }
            <div className="title-and-text--text-container">
                {
                    props.textArray.map((text,key)=>{
                        return(
                            <div key={key} className="title-and-text--text" style={{ fontSize: "17px", fontWeight: "400", color: "black" }}>
                                {text}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TitleAndText;