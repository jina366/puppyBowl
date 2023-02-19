import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const allPlayers = props.allPlayers
  const setSearched= props.setSearched
  
  const [searchTerm, setSearchTerm] = useState('')

  const searchHandle = (e) => {
    setSearchTerm(e.target.value);
    setSearched(e.target.value)
  };

  return (
    <div id="navbar">
      <h2>Puppy Bowl</h2>
      <input type='text' placeholder="Search" value={searchTerm} onChange={searchHandle}/>
    </div>
  );
};

export default Navbar;