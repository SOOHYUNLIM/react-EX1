import React, { useState } from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'

const ItemComponent = ({arr}) => {

    const [total, setTotal] = useState(0)

    const [items, setItems] = useState(arr)

    const changeItemAmount = (pno, amount) => {
        items.find(item => item.pno === pno).amount = amount
        setItems(items)
        let total = items.reduce((sum, item) => sum + item.price * item.amount, 0)
        setTotal(total)
    }

    return (
        <div>
            <h1>Item Component</h1>
            <hr></hr>
            <ItemList arr={items} fn={changeItemAmount}></ItemList>
            <hr></hr>
            <ItemTotal total={total}></ItemTotal>
        </div>
    )
}

export default ItemComponent