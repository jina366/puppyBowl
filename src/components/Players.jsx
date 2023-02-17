import React, { useState } from 'react'
import { useParams, Outlet, Link } from 'react-router-dom';

export default function Players(props) {
  const allPlayers = props.allPlayers
  const firstTeam = props.team1
  const secondTeam = props.team2
  console.log(firstTeam)
  console.log(secondTeam)
  console.log(allPlayers)

  const [] = useState([])
  let { id } = useParams();

  const getAllPuppyID = async () => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players/${id}`)
      const result = await response.json();
      return result
    } catch (error) {
      console.log(error)
    }
  }
  getAllPuppyID()
  
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