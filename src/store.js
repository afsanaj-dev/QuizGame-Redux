import { configureStore } from '@reduxjs/toolkit'
import  quizSlice  from './slices/quiz/quizSlice';

export const store = configureStore({
    reducer: {
      quiz: quizSlice,
  },
})

export default store;