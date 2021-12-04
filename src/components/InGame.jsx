import React, { useState } from 'react'
import {questions} from '../helper/questions';
const InGame = () => {
    console.log(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [choose, setChoose] = useState('');
    const [score, setScore] = useState(0);
    const handlePrevious = () => {
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    const handleNext = () => {
        if(currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    const handleSubmit = () =>  {

    }

    const handleChoose = (correct) => {
        if(correct) {
            setChoose(correct);
            // setScore( score + 1);
        }
    }

    return (
        <div>
            <div className="action">
                <button className="previous-btn" onClick={handlePrevious}>Previous</button>
                <button className="next-btn" onClick={handleNext}>Next</button>
                {currentQuestion === (questions.length - 1) &&
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                }
            </div>
            <div className="question-box">
                <div className="timer"></div>
                <span>Question {questions[currentQuestion]['id']}/ {questions.length}</span>
                <p className="question">
                    {questions[currentQuestion]['question_content']}
                </p>
            </div>
            <div className="answers">
                {
                    questions[currentQuestion]['answers'].map((answer, index) => {
                        return (
                            <p key={index} onClick={() => handleChoose(answer.correct)}>
                                <span>{index + 1}</span>
                                <span  >{answer.answer_content}</span>
                            </p>
                        )
                    }) 
                }
                      
              
            </div>

            <p>{score}</p>

        </div>
    )
}

export default InGame
