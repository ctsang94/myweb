import React from 'react'
import pfp from '../../assets/image/pfp.jpg'
import './Aboutme.scss'

function Aboutme() {
  return (
    <div className='aboutme'>
        <img className='aboutme__img' src={pfp}/>
        <h1 className='aboutme__title'>Hi, I'm Kelvin</h1>
        <p>I am a seasoned tech professional with over 10 years of experience, transitioning from Desktop Support to Software Engineering. Passionate about building effective and reliable tools that make a difference!</p>
    </div>
  )
}

export default Aboutme