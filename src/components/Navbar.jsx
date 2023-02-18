import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ allPlayers }) => {
  
  const [searchTerm, setSearchTerm] = useState('')

  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredPlayers = allPlayers.filter((player) => {
    return player.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  console.log(filteredPlayers)
  
  return (
    <div id="navbar">
      <h2>Puppy Bowl</h2>
      <input type='text' placeholder="Search" value={searchTerm} onChange={searchHandle}/>
    
      <ul>
        {filteredPlayers.map((player) => {
          return (
            
          <li>
            <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Navbar;