import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import "../styles/cardCounter.css"; // Import the CSS file

export default function CardCounter() {
    return (
        <Card className="card-container">

            <div className="mx-auto max-w-2xl lg:text-center py-12">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">

                   Comments and Review
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                   
                </p>
            </div>

            <div className="card-body-container">
                <CardBody className="card-body">
                    <p>I would strongly recommend natenrock business development services to any entrepreneur that intends to grow in business. The simply know how to increase you drive for growing your business.
                        Building a small business has never been more exciting with Natenrock consulting by ones side</p>
                </CardBody>
                <CardBody className="card-body">
                    <p>Thank you for the training and business consulting services natenrock. I have never seen such passion, in building others in business and it’s operation like I have seen from you. Our business testifies of your great consulting and training services. Quite detailed and tailored to us!. can’t fail to mention how simple it is to follow.
                        Can’t wait to join in on the next Entrepreneurship academy. To gain more personally. </p>
                </CardBody>
                <CardBody className="card-body">
                    <p>Thank you Natenrock! Certainly we can see the effect of your business guidance and your marketing training. It is evident in our growth. Kudos on the great job of consulting for our business.
                        From us at Treebees catering and confectionery</p>
                </CardBody>
            </div>
        </Card>
    );
}

