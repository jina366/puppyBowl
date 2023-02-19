import React from "react";
import { Link } from 'react-router-dom';

export default function Searched(props) {
    const searched=props.searched
    const allPlayers=props.allPlayers
    const loweredName = searched.toString().toLowerCase()

  const filteredPlayers = allPlayers.filter((player) => {
    return player.name.toLowerCase().startsWith(loweredName)
  })

  return (
    <div className="search">
        {
          filteredPlayers.length ? filteredPlayers.map((player, idx) => {
            return (
            <div className='puppy-desc' key={`one: ${idx}`} >
              <h3 className='puppyName-ID'>
              <span>{player.name}</span>
              <span>ID  #{player.id}</span>
              </h3>
              <img className='puppy-pic' src={player.imageUrl} />
              <Link to={`players/${player.id}`} >See Details</Link> 
            </div>
            )
          }) : null
        }
    </div>
  );
}


