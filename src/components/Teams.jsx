import React from 'react'
import Players from './Players'
import { Outlet, Link } from 'react-router-dom';

export default function Teams(props) {

    const allPlayers = props.allPlayers
    const firstTeam = props.team1
    const secondTeam = props.team2
    

  return (
    <div>
        <div className='teamOne'>
          {
          firstTeam.length ? firstTeam.map((player, idx) => {
            return (
            <div className='puppy-desc' key={`team one: ${idx}`} >
              <h3 >{player.name}{player.id}</h3>
              <img className='puppy-pic' src={player.imageUrl} />
              {/* <Players firstTeam={firstTeam} secondTeam={secondTeam} allPlayers={allPlayers}/> */}
              <Link to={`players/${player.id}`} firstteam={firstTeam} secondteam={secondTeam} allplayers={allPlayers} >See Details</Link> 
            </div>
            )
          }) : null
        }
        </div>
        <div className='teamTwo'>
          {
          secondTeam.length ? secondTeam.map((player, idx) => {
            return (
            <div className='puppy-desc' key={`team two: ${idx}`} >
              <h3 >{player.name}{player.id}</h3>
              <img className='puppy-pic' src={player.imageUrl} />
              {/* <Players secondTeam={secondTeam}/> */}
              <Link to={`players/${player.id}`} >See Details</Link> 
            </div>
            )
            }) : null
          }
        </div>
        <Outlet />
    </div>
  )
}
