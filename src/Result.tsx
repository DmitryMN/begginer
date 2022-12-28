import React from 'react'

const Result = ({ total, amount, resetIndex }) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>{`Вы отгадали ${total} ответа из ${amount}`}</h2>
            <button onClick={resetIndex}>Попробовать снова</button>
        </div>
    )
}


export default Result;
