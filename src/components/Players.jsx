import React, { useState } from 'react'

export default function Players(props) {
  const player = props.players

  const [] = useState([])
  
  
  return (
    <div>
      {players.map((player) => (
        <h3>{player.name}</h3>

      ))}
      </div>
  )
}
