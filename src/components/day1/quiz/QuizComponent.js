import React, { useState } from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = ({quizArr}) => {

    const [index, setIndex] = useState(0)
    const [complete, setComplete] = useState(0)

    const checkAnswer = (userInput) => {
        quizArr[index].answer === userInput ? (index === quizArr.length-1 ? setComplete(1) : setIndex(index+1)) : setComplete(-1)
    }

    const comp = () => {
        let result = null
        if(complete === 1)  result = <h1>다풀었다능!</h1>
        else if (complete === -1)   result = <h1>나가!</h1>
        else result = <><QuizBoard title={quizArr[index].title}></QuizBoard><QuizInput fn={checkAnswer}></QuizInput></>
        return result
    }

    return (
        <div>
          {comp()}
        </div>
    )
}

export default QuizComponent