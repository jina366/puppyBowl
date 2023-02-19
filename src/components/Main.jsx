import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { getAllPuppyWithFetch } from "../apiAdapters";
import { Teams } from "./";
import { Searched } from "./";

const Main = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [searched, setSearched] = useState('');
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

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
  }, []);

  useEffect(() => {
    if (allPlayers.length) {
      let teamOne = [];
      let teamTwo = [];
      allPlayers.forEach((player, idx) => {
        if (idx % 2 === 0) {
          teamOne.push(player);
        } else {
          teamTwo.push(player);
        }
      });
      setTeam1(teamOne);
      setTeam2(teamTwo);
    }
  }, [allPlayers]);

  return (
    <>
      <div id="main">
        <Navbar allPlayers={allPlayers} setSearched={setSearched} />

        {searched ? <Searched searched={searched} allPlayers={allPlayers}/> : 
        <Teams allPlayers={allPlayers} team1={team1} team2={team2} />}
      </div>
    </>
  );
};

export default Main;
