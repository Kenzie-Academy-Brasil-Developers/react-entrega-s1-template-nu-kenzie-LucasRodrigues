import './styles.css'
import { FiTrash2 } from 'react-icons/fi' 

export const Card = ({transition, removeTransition}) => {

    return (
        <li className='card'>
            <div className='type'>
            {transition.type === 'entrada' ?
            <div className='type-entrada'>
            </div>
            :
            <div className='type-saida'>
            </div>
            }
            <div>
                <h2 className='card-title'>{transition.description}</h2>
                <span className='card-type'>{transition.type}</span>
            </div>
            </div>
            <div className='value-remove'>
                <span className='card-value'>R$ {transition.value}</span>
                <button className='button-remove' onClick={(e) => removeTransition(transition.description)}><FiTrash2 /></button>
            </div>
        </li>

    )
}