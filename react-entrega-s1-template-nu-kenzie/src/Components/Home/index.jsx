import React from 'react'
import './styles.css'


export const Home = ({setStart}) => {

  return (
  <div className='home-box'>
    <section className='logo'>
    <img src='./NuKenzieDark.png' alt='' />
    <h3>
    Centralize o controle das suas finanças
    </h3>
    <p>
    de forma rápida e segura
    </p>
    <button className='button-primary' onClick={() => setStart(false)}>Iniciar</button>
    </section>
    <section className='svg'>
        <img src='./illustration.svg' alt='' />
    </section>
  </div>
  )
}
