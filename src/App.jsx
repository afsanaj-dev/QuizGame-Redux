import React from 'react'
import Quiz from './component/quiz/Quiz'

const App = () => {
  return (
    <div className="mt-[100px] w-[800px] h-[700x] bg-blue-50 mx-auto rounded-xl p-7">
      <h1 className='text-5xl text-center'>Quiz Game</h1>
      <Quiz/>
    </div>
  )
}

export default App