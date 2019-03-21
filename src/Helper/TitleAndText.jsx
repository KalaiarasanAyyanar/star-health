import React from "react";

const TitleAndText = (props) => {
    return (
        <div className="title-and-text">
            <div className="title-and-text--title">
                {props.title}
            </div>
            {
                (props.breifData) &&
                    <div className="title-and-text--text-breifData">
                        {props.breifData}
                    </div>
                
            }
            <div className="title-and-text--text-container">
                {
                    props.textArray.map((text)=>{
                        return(
                            <div className="title-and-text--text">
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