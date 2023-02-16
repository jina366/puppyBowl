import React from 'react'
import Players from './Players'

export default function Teams() {

    const allPlayers = props.allPlayers

  return (
    <div>
        <div>
            <Players allPlayers={allPlayers}/>
        </div>
        <div>Teams2</div>
    </div>
  )
}
