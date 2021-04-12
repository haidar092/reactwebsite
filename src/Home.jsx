import { formatMs } from "@material-ui/core";
import React from "react";
import web from "../src/Images/home.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common name="Grow your busines with"
                imgsrc={web} visit="/services"
                btnname="Get Started" />
        </>
    );
};
export default Home;