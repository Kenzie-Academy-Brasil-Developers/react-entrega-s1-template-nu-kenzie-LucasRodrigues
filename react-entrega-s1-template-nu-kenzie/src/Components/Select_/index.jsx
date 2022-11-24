import React from 'react'
import './styles.css'

export const Select = ({type, setType}) => {
  return (
    <select
                    name='value-type'
                    value={type}
                    required
                    onChange={event => setType(event.target.value)}>
                        <option hidden={true}>Tipo</option>
                        <option value='entrada'>Entrada</option>
                        <option value='saída'>Saida</option>
                    </select>
  )
}