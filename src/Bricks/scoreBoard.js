import React from 'react';
import './ScoreBoard.css'; // Importuj stylovací soubor

const ScoreBoard = ({ initialWins = 0, initialLosses = 0, currentWins, currentLosses }) => {
    const [wins, setWins] = React.useState(initialWins);
    const [losses, setLosses] = React.useState(initialLosses);

    React.useEffect(() => {
        setWins(currentWins);
        setLosses(currentLosses);
    }, [currentWins, currentLosses]);

    return (
        <div className="scoreboard">
            <h1>Rock<br />Paper<br />Scissors</h1>
            <div className="scores">
                <div className="score">
                    <p className='scoreTitle'>Wins</p>
                    <p className='scoreNumber'>{wins}</p>
                </div>
                <div className="score">
                    <p className='scoreTitle'>Loss</p>
                    <p className='scoreNumber'>{losses}</p>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;

