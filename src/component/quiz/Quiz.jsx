import React from "react";
import { resetQuiz, submitAnswer } from "../../slices/quiz/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "./question";

const Quiz = () => {
  //get current Quiz state from Redux
  const currentQIndex = useSelector((state) => state.quiz.currentQIndex);
  const score = useSelector((state) => state.quiz.score);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  //Get the Question object.(questions[currentQIndex] identifies the total question with options)
  const currentQuestion = questions[currentQIndex];
  const dispatch = useDispatch();

  // 🔥 Game Over UI
  if (quizOver) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 text-black flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-6">🎉 Game Over!</h1>
        <p className="text-2xl mb-10">Your final score is: <strong>{score}</strong></p>

        {/* Reset button bottom right */}
        <button
          onClick={() => dispatch(resetQuiz())}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg text-sm"
        >
          Restart Quiz
        </button>
      </div>
    );
  }


  return (
    <div>
      <h1 className="text-3xl leading-12 mt-8 p-2 border border-blue-500 rounded-xl bg-white">
        <span>Question -{currentQIndex + 1} : </span> {currentQuestion.question}
      </h1>
      {/* option list */}
      <ul>
        {currentQuestion.options.map((item, index) => (
          <li
            key={index}
            onClick={() => dispatch(submitAnswer(item))}
            className="py-4 px-2 border border-blue-500 bg-white rounded-xl my-4 text-2xl"
          >
            {item}
          </li>
        ))}
      </ul>
      {/* score count */}
      <p className="text-2xl py-3 text-center bg-white border rounded-xl border-amber-200">
        Your score is {score}
      </p>

      {/* Reset button */}
      <button
        onClick={() => dispatch(resetQuiz())}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-900 transition text-right"
      >
        Reset Quiz
      </button>
    </div>
  );
};

export default Quiz;
