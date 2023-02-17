import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function Players(props) {
  const allPlayers = props.allPlayers
  const firstTeam = props.team1
  const secondTeam = props.team2
  console.log(firstTeam)
  console.log(secondTeam)
  console.log(allPlayers)

  const [] = useState([])
  let { id } = useParams();
  
  return (
    <div>
      {
        id ? firstTeam.map((player) => {
          return (
            <h3>{player.name}</h3>
          )
        }): <h3>Nothing</h3>}
      <Link to="/">Go Back</Link>
      </div>
  )
}