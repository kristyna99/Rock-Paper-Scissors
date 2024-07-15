import React from 'react';
import './Result.css';
import rockImage from '../images/rock.png';
import paperImage from '../images/paper.png';
import scissorsImage from '../images/scissors.png';

const getImageForChoice = (choice) => {
    switch (choice) {
        case 'rock':
            return rockImage;
        case 'paper':
            return paperImage;
        case 'scissors':
            return scissorsImage;
        default:
            return null;
    }
};

function Result({ userChoice, computerChoice, result }) {
    return (
        <div className="result">
            <div className="user-choice">
                <p>Your choice:</p>
                <img src={getImageForChoice(userChoice)} alt={userChoice} />
                <p>{userChoice}</p>
            </div>
            <div className="result-text">
                <p>{result}</p>
            </div>
            <div className="computer-choice">
                <p>Computer's choice:</p>
                <img src={getImageForChoice(computerChoice)} alt={computerChoice} />
                <p>{computerChoice}</p>
            </div>
        </div>
    );
}

export default Result;
