import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function Teams(props) {

    const firstTeam = props.team1
    const secondTeam = props.team2
    
  return (
    <div className='container'>
        <div className='teamOne'>
          {
          firstTeam.length ? firstTeam.map((player, idx) => {
            return (
            <div className='puppy-desc' key={`team one: ${idx}`} >
              <h3 className='puppyName-ID'>
              <span>{player.name}</span>
              <span>ID  #{player.id}</span>
              </h3>
              <img className='puppy-pic' src={player.imageUrl} />
              <Link to={`players/${player.id}`}>See Details</Link> 
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
              <h3 className='puppyName-ID'>
                <span>{player.name}</span>
                <span>ID  #{player.id}</span>
              </h3>
              <img className='puppy-pic' src={player.imageUrl} />
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
