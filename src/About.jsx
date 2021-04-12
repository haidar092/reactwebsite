import { formatMs } from "@material-ui/core";
import React from "react";
import web from "../src/Images/about.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
           <Common name="Welcome To About Page" imgsrc={web} visit="/Contact" btnname="Contact Now" />
        </>
    );
};
export default About;