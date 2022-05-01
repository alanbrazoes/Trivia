import React, { createContext, useState } from 'react'
import { Props } from '../types'
import { IQuestions, IQuestion } from '../types/states'

export const INITIAL_STATE = [{
  category: '',
  type: '',
  difficulty: '',
  question: '',
  correct_answer: '',
  incorrect_answers: ['']
}]

export const ContextQuestions = createContext({} as IQuestions)

const StateQuestion: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<IQuestion[]>(INITIAL_STATE)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const states = { questions, currentQuestion, answers }
  const setters = { setQuestions, setCurrentQuestion, setAnswers }

  return (
    <ContextQuestions.Provider value={{ states, setters }}>
      {children}
    </ContextQuestions.Provider>
  )
}

export default StateQuestion
