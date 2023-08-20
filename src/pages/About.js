import React from "react";
import Card from "../component/Card";

const About = () =>{
    return(
        <>
        <main>
        <div className="container">
        <Card 
        heading="about card heading" 
        description="about card description"
        buttonText="download me"
         />
        </div>
        </main>
        </>
    )
}

export default About;