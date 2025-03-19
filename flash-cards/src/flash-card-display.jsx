import './flash-card-display.css';
import React, { useState } from 'react';


function FlashCardDisplay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const questions = [
        "What is the difference between var, let, and const?",
        "What is the scale of measure for the weight of...?",
        "What is the clap space between a feather and the body?",
        "Why is the clap space between a feather and the body?",
        "Go is the clap space between a feather and the body?"
    ];

    const answers = [
        "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.",
        "In JavaScript, we just assume to be re-declared; everything is block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.",
        "In JavaScript, let and const are the angle where the feather, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.",
        "In JavaScript, let and const are the angle where the feather, (we really don't know). However, const objects can have their contents modified.",
        "In JavaScript, let and const are the angle where the feather, (we really don't know). However, const objects can have their contents modified."
    ];

    const updateFlashCard = (index) => {
        setCurrentIndex(index);
        setShowAnswer(false);
    };

    const displayPrevCard = () => {
        if (currentIndex > 0) {
            updateFlashCard(currentIndex - 1);
        }
    };

    const displayNextCard = () => {
        if (currentIndex < questions.length - 1) {
            updateFlashCard(currentIndex + 1);
        }
    };

    const toggleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <>
            
                <main>
                    <section className="complete-container">
                        <h2>Flash Cards</h2>
                        <section className="progress-bar-container">
                            <div className="progress-bar-inner">
                                <div className="progress-bar" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
                                <div className="progress-percent">{`${Math.round(((currentIndex + 1) / questions.length) * 100)}%`}</div>
                            </div>
                            <div className="counter"><p>{`${currentIndex + 1} of ${questions.length}`}</p></div>
                        </section>
                        <section className="flash-card-container">
                            <div className="carousel">
                                {questions.map((question, index) => (
                                    <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                                        <div className={`flash-card-question ${index === currentIndex && !showAnswer ? 'active' : ''}`}>
                                            <p>{question}</p>
                                        </div>
                                        <div className={`flash-card-answer ${index === currentIndex && showAnswer ? 'active' : ''}`}>
                                            <p>{answers[index]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="navigation-container">
                                <button onClick={displayPrevCard} className="prev">&lt; &nbsp; Previous</button>
                                <button onClick={toggleShowAnswer} id="show" className="show-answer">{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
                                <button onClick={displayNextCard} className="next">Next &nbsp; &gt;</button>
                            </div>
                        </section>
                    </section>
                </main>
            
        </>
    );
}

export default FlashCardDisplay;