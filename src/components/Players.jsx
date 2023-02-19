import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Navbar } from "./";

export default function Players() {
  
  const [player, setPlayer] = useState(null)
  let { id } = useParams();
  
  useEffect (() => {
    const getAllPuppyID = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players/${id}`)
        const result = await response.json();
        setPlayer(result.data.player)
      } catch (error) {
        console.log(error)
      }
    }
    getAllPuppyID()
    
    
  }, [id] )
  

  
  return (
    <div className='playersBackground'>
      
      {player ? (
        <div className='playersDiv'>
          <h3>{player.name}</h3>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Team: {player.teamId}</p>
          <img src={player.imageUrl} alt={player.name} className="playersPic"/>
          <Link to="/">Go Back</Link>
        </div>
      ): null }
    </div>
  );
}