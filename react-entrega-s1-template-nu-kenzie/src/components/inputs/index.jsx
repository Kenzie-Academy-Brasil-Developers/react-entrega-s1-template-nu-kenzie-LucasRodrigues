import { ButtonPrimary } from '../button'
import { useState } from 'react'
import './styles.css'
import { Select } from '../select'

export const Form = ({setListTransactions}) => {
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('1')

    const addTransition = (event) => {
        event.preventDefault()
            
        if (description !=='' && type !== '' && value!== '') {
            const newTransition = {
                description,
                type,
                value  
            }
            if (newTransition.type === 'saída' && newTransition.value > 0) {
                newTransition.value = (newTransition.value*-1)
            }
            setListTransactions((oldTransitions) => [...oldTransitions, newTransition])
            setDescription('')
            setType('')
            setValue('1')
        }
    }
    return (
        <form onSubmit={addTransition}>
            <p>Drecição</p>
            <input
            type='text'
            value={description}
            required
            onChange={event => setDescription(event.target.value)}
            placeholder='Digite aqui sua descrição'
            />
            <span>Ex: compra de roupas</span>
            <div className='value-type-box'>
                <div className='value-box'>
                    <p>Valor</p>
                    <input 
                    type='number' 
                    value={value}
                    required
                    onChange={event => setValue(Number(event.target.value))}
                    />
                </div>
                <div className='type-box'>
                    <p>Tipo de valor</p>
                    <Select type={type} setType={setType} />
                </div>
            </div>
            <ButtonPrimary>Inserir Valor</ButtonPrimary>
        </form>
    )
}