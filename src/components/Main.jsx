import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getAllPuppyWithFetch } from "../apiAdapters";
import {Teams} from "./";

const Main = () => {

    const [allPlayers, setAllPlayers] = useState([])
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    
    
    async function fetchAllPlayers() {
        try {
            const data = await getAllPuppyWithFetch();
            setAllPlayers(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    // function showID() {
    //     const newTeams = [...allPlayers]
    //     const teams = newTeams.find(teams => teams.id === id)
    //     console.log(teams)
    // }
   
    useEffect(() => {
        fetchAllPlayers();
    }, [])

    useEffect(() => {

        
        if (allPlayers.data.players.length) {
            let teamOne = [];
            let teamTwo = [];
            allPlayers.data.players.forEach((player, idx) => {
                if (idx % 2 === 0) {
                    teamOne.push(player);
                } else {
                    teamTwo.push(player);
                }
            });
            setTeam1(teamOne);
            setTeam2(teamTwo);
            console.log(teamOne);
            console.log(teamTwo);
        }
    }, [allPlayers]);
    console.log(allPlayers.data.players.length)

    return(

        <div id="main">
            <Navbar />
            <Teams allPlayers={allPlayers} team1={team1} team2={team2}/>
        </div>
    )
}

export default Main