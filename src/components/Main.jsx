import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getAllPuppyWithFetch } from "../apiAdapters";
import {Teams} from "./";

const Main = () => {

    const [allPlayers, setAllPlayers] = useState([])
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    function showID() {
        const newTeams = [...allPlayers]
        const teams = newTeams.find(teams => teams.id === id)
        console.log(teams)
    }
   

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
        </div>
    )
}

export default Main