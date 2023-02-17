import React from 'react'
import Players from './Players'

export default function Teams(props) {

    const allPlayers = props.allPlayers
    const firstTeam = props.team1
    const secondTeam = props.team2




  return (
    <div>
        <div>
          {firstTeam.map((player, idx) => (
            <div>
              {player.name} the {player.breed}
            </div>
          ))}
        </div>
        <div>
          {secondTeam.map((player, idx) => (
            <div>
              {player.name} the {player.breed}  
            </div>
          ))}
        </div>
    </div>
  )
}
