import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function Players(props) {
  const player = props.players
  console.log(player)

  const [] = useState([])
  let { id } = useParams();
  
  return (
    <div>
      {
        id ? <h3>{id}</h3> : <h3>Nothing</h3>
      }
      {player.map((player) => (
        <h3>{player.breed}
        <Outlet />
        </h3>
      ))}
      <Link to="/Teams">Go Back</Link>
      </div>
  )
}
