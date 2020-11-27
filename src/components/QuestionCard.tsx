import React from "react";
// Types
import { AnswerObject } from "../App";
// Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <div>
      <p className="number">
        Question:{questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <div key={answer}>
              <button disabled={!!userAnswer} value={answer} onClick={callBack}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          </ButtonWrapper>
        ))}
      </div>
    </div>
  </Wrapper>
);

export default QuestionCard;
