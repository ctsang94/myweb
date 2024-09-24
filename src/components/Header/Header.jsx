import React from 'react'
import './Header.scss';
import { useTheme } from '../../common/ThemeContext';

function Header() {

 const {theme, toggleTheme} = useTheme();

 console.log(theme)
  return (
    <div className={`header ${theme}`}>
      <span>K.T</span>
      <ul className='header__list'>
        <li className='header__list-title'>About</li>
        <li className='header__list-title'>Projects</li>
        <li className='header__list-title'>Contact Me</li>
      </ul>
    </div>
  )
}

export default Header
