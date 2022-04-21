import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { IPlayerState } from '../../context/types'
import useFetch from '../../hooks/useFetch'
import Loading from '../Loading'
import { ContextPlayer } from '../../context/player'
import { ContextQuestions } from '../../context/questions'
import { ContextTimer } from '../../context/timer'
import { ButtonNext, TextBtn } from './Style'
import { INavigation } from '../../types'
import Answers from '../Answers'

interface ILevel {
  [key: string]: number
}

const Questions: React.FC<INavigation> = ({ navigation }) => {
  const { data, error, loading } = useFetch('https://opentdb.com/api.php?amount=10')
  const { setPlayer, player } = useContext<IPlayerState>(ContextPlayer)
  const {
    states: { answers, currentQuestion, questions },
    setters: { setAnswers, setCurrentQuestion, setQuestions }
  } = useContext(ContextQuestions)
  const { timer, setPaused, setTimer } = useContext(ContextTimer)

  const [isDisable, setIsDisable] = useState(false)
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

  const answer = (
    option: string,
    difficulty: string = questions[currentQuestion].difficulty
  ) => {
    setPaused(true)
    setIsvisible(true)
    setIsDisable(true)
    const correct = questions ? questions[currentQuestion].correct_answer : null
    if (option === correct) {
      const level: ILevel = {
        hard: 3, medium: 2, easy: 1
      }
      setPlayer({ ...player, score: 10 + level[difficulty] * timer + player.score + 1 })
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <View>
      {error && <Text>Error</Text>}
      <>
        <Text>Catagory: {questions[currentQuestion].category}</Text>
        <Text>Difficulty: {questions[currentQuestion].difficulty}</Text>
        <Text>{questions[currentQuestion].question}</Text>
        <Answers answers={answers} response={answer} disable={isDisable}/>
        {currentQuestion < 9
          ? (isVisible && (
            <ButtonNext
              onPress={() => {
                setCurrentQuestion(currentQuestion + 1)
                setIsDisable(false)
                setIsvisible(false)
                setPaused(false)
                setTimer(30)
              }}
              disabled={false}
            >
              <TextBtn>Next</TextBtn>
            </ButtonNext>))
          : (isVisible && (
            <ButtonNext
              onPress={() => navigation?.navigate('Feedback')}
            >
              <TextBtn>See Results</TextBtn>
            </ButtonNext>
          ))}
      </>
    </View>
  )
}

export default Questions
