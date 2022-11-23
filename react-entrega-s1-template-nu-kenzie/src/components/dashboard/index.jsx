import { Form } from '../inputs'
import { Total } from '../total'
import './styles.css'
import { Header } from '../header'
import { useState } from 'react'
import { CardList } from '../card_list'


export const Dashboard = ({setStart}) => {
    
    const [listTransactions, setListTransactions] = useState([])

    const [filtered, setFiltered] = useState('todos')
    
    const listFiltered = listTransactions.filter(
        transition => 
        filtered === 'todos' ?
        true :
        transition.type === filtered
        )
    const removeTransition = (transitionName) => {
        const newList = listTransactions.filter(elem => elem.description !== transitionName)
        setListTransactions(newList)
    }

  return (
        <>
        <Header setStart={setStart}/>
      <main className='container-dashboard'>
        <section className='secone'>
          <Form setListTransactions={setListTransactions}/>
          <Total listFiltered={listFiltered} />
        </section>
        <section className='sectwo'>
          <CardList setFiltered={setFiltered} listFiltered={listFiltered} removeTransition={removeTransition}/>
        </section>
      </main>
      </>
        
    )
}