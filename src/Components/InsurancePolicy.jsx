import React from "react";
import TitleAndText from "../Helper/TitleAndText.jsx";
import image from "../Images/InsurancePolicyImage.png";
const data = {
    head: {
        title: "Key Features",
        breifData: "IRDA/NL-91/IRDA/NL-91/IRDA/NL-91",
        text: ["A paragraph (from the Ancient Greek παράγραφος paragraphos, to write beside or written beside) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences"]
    },
    left: {
        title: "Key Features",
        text: ["No capping No room rent", "Covers medical expenses", "Cost of health check up", "Cover for maternity"]
    },
    right: {
        title: "Key Features",
        text: ["No capping No room rent", "Covers medical expenses", "Cost of health check up", "Cover for maternity"]
    }
}

const InsurancePolicy = () => {
    return (
        <div className="insurance-policy">
            <div className="insurance-policy-image-container">
                <div className="">
                    <img className="insurance-policy-image" src={image} alt="Oops!!! not found" />
                </div>
            </div>
            <div className="insurance-policy-data">
                <div className="insurance-policy-data--head">
                    <TitleAndText title={data.head.title} textArray={data.head.text} breifData={data.head.breifData} />
                </div>
                <div className="insurance-policy-data--body">
                    <div className="insurance-policy-data--left">
                        <TitleAndText title={data.left.title} textArray={data.left.text} />
                    </div>
                    <div className="insurance-policy-data--right">
                        <TitleAndText title={data.right.title} textArray={data.right.text} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsurancePolicy;