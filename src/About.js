import React from 'react';
import { NavLink } from "react-router-dom";
import web from "../src/Images/img11.jpg";
import Common from './Common';


const About = () => {
  return (
    <>
       <Common 
       name="Welcome to About Page"
       imgsrc={web}
       visit="/contact"
       btnName="Contact now"/>
    </>
  );
}

export default About;