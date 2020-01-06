import React from 'react'
import ItemDetails from './ItemDetails'

const ItemList = ({arr, fn}) => {
    
    const lis = arr.map(item => {
        item.changeItemAmount = fn
        return <li key={item.pno}><ItemDetails {...item}/></li>
    })

    return (
        <ul>
            {lis}
        </ul>
    )
}

export default ItemList