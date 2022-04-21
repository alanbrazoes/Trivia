import React from 'react'

interface IPlayer {
  name: string,
  score: number
}

interface IPlayerState {
  player: IPlayer,
  setPlayer: React.Dispatch<React.SetStateAction<IPlayer>>
}

interface ITimer {
  timer: number;
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>
}

interface IQuestion {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[]
}

interface IQuestions {
  states: {
    questions: IQuestion[];
    currentQuestion: number;
    answers: string[];
  }
  setters: {
    setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
    setAnswers: React.Dispatch<React.SetStateAction<string[]>>
  }
}

export { IPlayer, ITimer, IPlayerState, IQuestions, IQuestion }
