import React, { useState } from 'react'

const ItemDetails = ({ pno, pname, price, amount, changeItemAmount }) => {

    const [amountValue, setAmountValue] = useState(amount)

    const handleChange = (e) => {
        setAmountValue(e.target.value)
        changeItemAmount(pno, Number(e.target.value))
    }

    const srcFile = 'samples/0' + pno + '.jpg'

    return (
        <div>
            <img src={srcFile}></img>
            <span>{pname}</span>
            <input type="number" value={amountValue} onChange={handleChange}/>
            <span>{price}</span>
        </div>
    )
}

export default ItemDetails