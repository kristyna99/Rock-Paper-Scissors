import React from 'react';
import './RulesModal.css';

function RulesModal({ showRules, toggleRules }) {
    if (!showRules) return null;

    return (
        <div className="rules-modal">
            <div className="rules-content">
                <h2>Rules</h2>
                <p>1. Rock beats Scissors</p>
                <p>2. Scissors beats Paper</p>
                <p>3. Paper beats Rock</p>
                <h4>Scoring</h4>
                <p>You earn a point if you win.</p>
                <p>Your opponent earns a point if you lose.</p>
                <p>No points are awarded in case of a tie.</p>
                <button className="close-btn" onClick={toggleRules}>
                    <span>&times;</span>
                </button>
            </div>
        </div>
    );
}

export default RulesModal;
