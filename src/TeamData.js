import React from 'react'
import './Team.css'

function TeamData({image, name, description, role, quote}) {
  return (
    <div className='meet_team' >
        <img className='team_img' src= {image}/>
        <div className="team_content">
        <h2 className='team_name' > {name} </h2>
        <h3 className="team_role"> {role} </h3>
        <p className='team_descrpt'> {description} </p>
        <p className="anecdote"> {quote} </p>
        </div>
    </div>
  )
}

export default TeamData