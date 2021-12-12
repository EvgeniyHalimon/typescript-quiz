import React from "react";
import { AnswersObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswersObject | undefined,
    questionNumber: number,
    totalQuestion: number
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestion}) => (
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} /> 
        <div>
            {answers.map(answer=> (
                <ButtonWrapper 
                    key={answer} 
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button 
                        disabled={!!userAnswer}
                        onClick={callback}
                    >
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </button>
                </ButtonWrapper>
            ))}    
        </div>   
    </Wrapper>
)

export default QuestionCard