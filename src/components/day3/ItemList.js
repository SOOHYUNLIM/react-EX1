import React from 'react'

const ItemList = ({arr}) => {

    const lis = arr.map(({pno, pname, price}) => <li key={pno}>{pname} {price}</li>)

    return (
        <ul>
            {lis}
        </ul>
    )
}

export default ItemList