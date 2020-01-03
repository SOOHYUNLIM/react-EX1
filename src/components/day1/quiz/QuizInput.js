import React, { useState } from 'react'

const QuizInput = ({fn}) => {
    const [text, setText] = useState("")
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        fn(text)
        setText("")
    }

    return (
        <div>
            <input type='text' onChange={handleChange} value={text}></input>
            <button onClick={handleClick}>확인</button>
        </div>
    )
}

export default QuizInput