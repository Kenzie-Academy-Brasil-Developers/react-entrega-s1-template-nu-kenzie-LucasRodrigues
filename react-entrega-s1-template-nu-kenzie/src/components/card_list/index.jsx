import React from 'react'
import './styles.css'
import { Card } from './card' 

export const CardList = ({setFiltered, listFiltered, removeTransition}) => {
  return (
    <ul className='card-list'>
            <div className='card-list-header'>
              <h2>Resumo financeiro</h2>
              <div>
              <button className='button-secondary' onClick={() => setFiltered('todos')}>Todos</button>
              <button className='button-secondary' onClick={() => setFiltered('entrada')}>Entradas</button>
              <button className='button-secondary' onClick={() => setFiltered('saída')}>Despesas</button>
              </div>
              </div>
              { listFiltered <= 0 ? <p className='empty-list'>Você ainda não possui nenhum lançamento</p> :

              listFiltered.map((transition, i) => 
              <Card key={i} transition={transition} removeTransition={removeTransition} />
                )
              }
          </ul>
  )
}