import React from 'react'

const Game = ({question, selectCorrect, progress}) => {
    
    return (
        <>
            <div className="progress">
                <div style={{ width: `${progress}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((variant, index) => <li key={variant} onClick={() => {selectCorrect(index)}}>{variant}</li>)
                }
            </ul>
        </>
    );
}


export default Game;
