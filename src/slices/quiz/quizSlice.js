import { createSlice } from '@reduxjs/toolkit'
import { questions } from '../../component/quiz/question'

// taking initial  values
const initialState = {
    quizQ : questions,
    score: 0,
    quizOver: false,
    currentQIndex:0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  // creating reducers
  reducers: {
    // submit reducer
    submitAnswer: ((state, actions) => {
      const currentQuestion = state.quizQ[state.currentQIndex]
      if (actions.payload === currentQuestion.correctAnswer) {
        state.score++
      }    
      if (state.currentQIndex < state.quizQ.length - 1) {
        state.currentQIndex +=1
      } else {
        state.quizOver= true
      }
      console.log(actions.payload,currentQuestion)
      console.log(state.quizQ[state.currentQIndex].question)

    }),
    // reset reducer
    resetQuiz: ((state, actions) => {
      state.currentQIndex = 0;
      state.score = 0;      
      state.quizOver= false
    })
  },
})

// Action creators are generated for each case reducer function
export const { submitAnswer,resetQuiz} = quizSlice.actions

export default quizSlice.reducer