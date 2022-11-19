import './styles.css'
import React from 'react'

export const Header = ({setStart}) => {

    return (
        <header>
            <div className='container-header'>
                <img src='./NuKenzie.png' alt='Logo' />
                <button className='button-secondary' onClick={() => setStart(true)}>Inicio</button>
            </div>
        </header>
    )
}