import React, {useState} from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'

const ItemComponent = () => {

    const items = [
        {pno: 1, pname: "Product...01", price: 3000},
        {pno: 2, pname: "Product...02", price: 4000},
        {pno: 3, pname: "Product...03", price: 5000},
        {pno: 4, pname: "Product...04", price: 6000},
        {pno: 5, pname: "Product...05", price: 7000}
    ]

    return (
        <div>
            <h1>Item Component</h1>
            <hr></hr>
            <ItemList arr={items}></ItemList>
            <hr></hr>
            <ItemTotal></ItemTotal>
        </div>
    )
}

export default ItemComponent