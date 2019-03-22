import React from "react";
import TitleAndText from "../Helper/TitleAndText.jsx";
import image from "../Images/InsurancePolicyImage.png";
const data = {
    head: {
        title: "Star Comprehensive Insurance policy",
        breifData: "IRDAI/NL-HLT/SHAI/P-H/V.III/398/14-15",
        text: ["It’s often said that your health is your wealth. And with the same belief, we make it our mission to ensure that your health is never compromised. That’s why we offer you an array of flexible plans to protect your health.Be it for yourself or your near and dear ones, health shall never come second with Star Health Insurance by your side."]
    },
    left: {
        title: "Key Features",
        text: ["No capping No room rent", "Covers medical expenses", "Cost of health check up", "Cover for maternity"]
    },
    right: {
        title: "Advantages",
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