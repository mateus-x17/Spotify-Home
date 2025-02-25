import React from 'react'
import ImgSpotify from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <Link to={'/'}><img src={ImgSpotify} alt="logo spotify" /></Link>
      <Link className='header__link' to="/"><h1>Spotify</h1></Link>
    </div>
  )
}
