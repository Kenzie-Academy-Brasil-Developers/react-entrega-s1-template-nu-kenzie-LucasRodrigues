import './styles.css'

export const Total = ({listFiltered}) => {
    
    return (
        <div className='total-box'>
            <div className='total-box-value'>
                <span>Valor Total:</span>
                <p>$ {listFiltered.reduce((acc, elem) => acc+elem.value, 0 )}</p> 
            </div>
            <div>
                <p className='total-box-info'>O valor se refere ao saldo</p>
            </div>
        </div>
    )
}