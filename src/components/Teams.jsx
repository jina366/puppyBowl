import React from 'react'
import Players from './Players'

export default function Teams(props) {

    const allPlayers = props.allPlayers
    console.log(allPlayers)

  return (
    <div>
        <div>
            <Players allPlayers={allPlayers}/>
        </div>
        <div>Teams2</div>
    </div>
  )
}
