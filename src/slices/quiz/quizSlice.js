import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../../component/quiz/question'

const initialState = {
    quizQ : questions,
    score: 0,
    quizOver: false,
    currentQIndex:0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: ((state, actions) => {
      const currentQuestion = state.quizQ[state.currentQIndex]
      if (actions.payload === currentQuestion.correctAnswer) {
        state.score++
      }
      if (state.currentQIndex === state.quizQ.length - 1) {
        state.quizOver= true
      } else {
        state.currentQIndex +=1
      }
           console.log(actions.payload,currentQuestion)
      console.log(state.quizQ[state.currentQIndex].question)

    }),
    resetQuiz: ((state, actions) => {
      if (currentQIndex === questions.length) {
        state.currentQIndex = 0;
        state.score = 0;      
      }
    })
  },
})

// Action creators are generated for each case reducer function
export const { submitAnswer,resetQuiz} = quizSlice.actions

export default quizSlice.reducer