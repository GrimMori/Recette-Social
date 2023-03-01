import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../partials/Layout'
import ProfileCard from '../partials/ProfileCard'

function Home() {
  return (
    <div className="home-main">
      <div className="home-div">
        <div className="title-div">
          <img className="navbar-icon" src={require("../assets/logo.svg").default} />
          <h1 className="title">Recette<span>Social</span></h1>
        </div>
        <button className="home-button">
          <Link to={'/social'}>Bon Appétit</Link>
        </button>
      </div>
      <video className="home-video" autoPlay muted loop>
        <source src={require("../assets/homevideo.mp4")} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Home
