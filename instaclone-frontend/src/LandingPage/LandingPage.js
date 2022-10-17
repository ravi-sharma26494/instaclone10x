import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './banner.png'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landingpage'>
        <div className='banner'>
            <img src={Banner} alt ='banner' />
        </div>
        <div className='content'>
            <h1>10x Team 04</h1>
            <Link to='/postview'><button className="button button1">Enter</button></Link>
        </div>
    </div>
  )
}

export default LandingPage