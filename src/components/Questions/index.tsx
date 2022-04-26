import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import { IPlayerState } from '../../context/types'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading'
import { ContextPlayer } from '../../context/player'
import { ContextQuestions } from '../../context/questions'
import { ContextTimer } from '../../context/timer'
import { ButtonNext, Container, TextBtn } from './Style'
import { INavigation } from '../../types'
import Answers from '../Answers'

const Questions: React.FC<INavigation> = ({ navigation }) => {
  const { data, error, loading } = useFetch('https://opentdb.com/api.php?amount=10')
  const { setPlayer, player } = useContext<IPlayerState>(ContextPlayer)
  const {
    states: { answers, currentQuestion, questions },
    setters: { setAnswers, setCurrentQuestion, setQuestions }
  } = useContext(ContextQuestions)
  const { timer, setPaused, setTimer } = useContext(ContextTimer)

  const [isDisable, setIsDisable] = useState(false)
  const [isDisableNext, setIsDisableNext] = useState(true)
  const [isVisible, setIsvisible] = useState(false)

  useEffect(() => {
    return (
      setCurrentQuestion(0),
      setTimer(30)
    )
  }, [])

  useEffect(() => {
    if (data) {
      setQuestions(data)
      setAnswers([...data[currentQuestion].incorrect_answers, data[currentQuestion].correct_answer])
    }
  }, [data])

  useEffect(() => {
    if (questions) {
      const answersOptions = [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer]
      setAnswers(answersOptions.sort())
    }
  }, [currentQuestion])

  const answer = (option: string) => {
    setPaused(true)
    setIsvisible(true)
    setIsDisable(true)
    setIsDisableNext(false)
    const correct = questions ? questions[currentQuestion].correct_answer : null
    if (option === correct) {
      setPlayer({ ...player, score: 10 * timer + player.score })
    }
  }

  if (loading) {
    return <Loading />
  }

  const { category, question } = questions[currentQuestion]

  return (
    <Container>
      {error && <Text>Error</Text>}
      <>
        <Text>Catagory: {category}</Text>
        <Text>{question}</Text>
        <Answers answers={answers} response={answer} disable={isDisable}/>
        {currentQuestion < 9
          ? (
            <ButtonNext
              onPress={() => {
                setIsDisableNext(true)
                setCurrentQuestion(currentQuestion + 1)
                setIsDisable(false)
                setIsvisible(false)
                setPaused(false)
                setTimer(30)
              }}
              visible={isVisible}
              disabled={isDisableNext}
            >
              <TextBtn>Next</TextBtn>
            </ButtonNext>)
          : (
            <ButtonNext
              disabled={isDisableNext}
              visible={isVisible}
              onPress={() => navigation?.navigate('Feedback')}
            >
              <TextBtn>See Results</TextBtn>
            </ButtonNext>
          )}
      </>
    </Container>
  )
}

export default Questions
