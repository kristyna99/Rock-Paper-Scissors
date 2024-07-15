import React, { useState } from 'react';
import './App.css';
import ScoreBoard from "./Bricks/scoreBoard";
import Choices from './Bricks/choises';
import Result from './Bricks/result';
import RulesModal from './Bricks/rulersModal';

const CHOICES = ['rock', 'paper', 'scissors'];

function App() {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [showRules, setShowRules] = useState(false);

    const handleUserChoice = (choice) => {
        setUserChoice(choice);
        const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setComputerChoice(randomChoice);
        determineWinner(choice, randomChoice);
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult("It's a tie!");
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            setResult('You win!');
            setWins(prevWins => prevWins + 1);
        } else {
            setResult('You lose!');
            setLosses(prevLosses => prevLosses + 1);
        }
    };

    const toggleRules = () => {
        setShowRules(!showRules);
    };

    return (
        <div className="App">
            <ScoreBoard currentWins={wins} currentLosses={losses} />
            <Choices handleUserChoice={handleUserChoice} />
            {userChoice && (
                <Result userChoice={userChoice} computerChoice={computerChoice} result={result} />
            )}
            <button className="rules-btn" onClick={toggleRules}>RULES</button>
            <RulesModal showRules={showRules} toggleRules={toggleRules} />
        </div>
    );
}

export default App;
