import React from 'react'
import Players from './Players'

export default function Teams(props) {

    const allPlayers = props.allPlayers
    const playerData = allPlayers.data
    const playersList = props.allPlayers.players


    const teamOne = props.team1
    const teamTwo = props.team2
  
    console.log(allPlayers)
    console.log(playerData)
    console.log(playersList)

    console.log(teamOne)
    console.log(teamTwo)




  return (
    <div>
        <div >
          {teamOne.map((player, idx) => {
            <Players />
          })}
            <Players allPlayers={allPlayers}/>
        </div>
        <div >Teams2</div>
    </div>
  )
}
