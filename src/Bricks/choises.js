import React from 'react';
import './Choices.css';
import rockImage from '../images/rock.png';
import paperImage from '../images/paper.png';
import scissorsImage from '../images/scissors.png';

const CHOICES = ['rock', 'paper', 'scissors'];

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

function Choices({ handleUserChoice }) {
    return (
        <div className="choices">
            {CHOICES.map(choice => (
                <button key={choice} onClick={() => handleUserChoice(choice)} className="choice-btn">
                    <img src={getImageForChoice(choice)} alt={choice} />
                    <div className="choice-circle"></div>
                </button>
            ))}
        </div>
    );
}

export default Choices;
