import React from "react";
import { Navbar } from "./";
import { getAllPuppyWithFetch } from "../apiAdapters";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
        </div>
    )
}

export default Main