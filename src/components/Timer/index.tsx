import React, { useContext, useEffect } from 'react'
import { ContextQuestions } from '../../context/questions'
import { ContextTimer } from '../../context/timer'
import { ContainerTimer, Title } from './styles'

const Timer: React.FC = () => {
  const {
    states: { paused, timer },
    setters: { setTimer }
  } = useContext(ContextTimer)
  const { states: { questions } } = useContext(ContextQuestions)

  let time: any = () => null

  useEffect(() => {
    if (!paused && timer > 0 && questions.length === 10) {
      time = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }
  })

  useEffect(() => () => clearTimeout(time))

  time()

  return (
    <ContainerTimer>
      <Title>00:{timer.toString().padStart(2, '0')}</Title>
    </ContainerTimer>
  )
}

export default Timer
