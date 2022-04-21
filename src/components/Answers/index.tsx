import React from 'react'
import { ButtonAnswers, TextBtn } from './styles'

interface IAnswers {
  answers: string[];
  response: any;
  disable: boolean
}

const Answers: React.FC<IAnswers> = ({ answers, response, disable }) => (
  <>
    {answers.map((answer) => (
      <ButtonAnswers
        key={answer}
        onPress={() => response(answer)}
        disabled={disable}
      >
        <TextBtn>{answer}</TextBtn>
      </ButtonAnswers>
    ))}
  </>
)

export default Answers
