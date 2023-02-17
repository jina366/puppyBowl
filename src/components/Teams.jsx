import React from 'react'
import Players from './Players'

export default function Teams(props) {

    const allPlayers = props.allPlayers
    const firstTeam = props.team1
    const secondTeam = props.team2




  return (
    <div>
        <div className='teamOne'>
          {firstTeam.map((player, idx) => (
            <div key={`team one: ${idx}`} >
              <h3 >{player.name} the {player.breed}</h3>
              <img className='puppy-pic' src={player.imageUrl} />
            </div>
          ))}
        </div>
        <div className='teamTwo'>
          {secondTeam.map((player, idx) => (
            <div key={`team two: ${idx}`} >
              <h3 >{player.name} the {player.breed}</h3>
              <img className='puppy-pic' src={player.imageUrl} />
            </div>
          ))}
        </div>
    </div>
  )
}
