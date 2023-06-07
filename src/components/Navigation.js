import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Navigation() {  
    const { theme, toggle, dark } = useContext(ThemeContext)
        return (
             <div className='nav'>
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul className='nav-list'>
                        <li className='nav-list--element'><a className='active' href ="#home">Home</a></li>
                        <li className='nav-list--element'><a href ="#news">News</a></li>
                        <li className='nav-list--element'><a href ="#about">About</a></li>
                        <li className='nav-list--element'><a href ="#contact">Contact</a></li>
                    </ul>
                    <div className='' style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
            </nav>
            </div>
        )
    }
