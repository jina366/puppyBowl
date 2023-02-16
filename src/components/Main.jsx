import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getAllPuppyWithFetch } from "../apiAdapters";
import {Teams} from "./";

const Main = () => {

    const [allPlayers, setAllPlayers] = useState([])

    async function fetchAllPlayers() {
        try {
            const data = await getAllPuppyWithFetch();
            setAllPlayers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllPlayers();
    }, [])

    return(

        <div id="main">
            <Navbar />
            <Teams allPlayers={allPlayers}/>
            <getAllPuppyWithFetch />
        </div>
    )
}

export default Main