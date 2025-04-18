import React from "react";
import { resetQuiz, submitAnswer } from "../../slices/quiz/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "./question";

const Quiz = () => {
  const currentQIndex = useSelector((state) => state.quiz.currentQIndex);
  // questions[currentQIndex] identifies the total question with options
  const currentQuestion = questions[currentQIndex];
  const score = useSelector((state) => state.quiz.score);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-3xl leading-12 mt-8 p-2 border border-blue-500 rounded-xl bg-white">
        <span>Question -{currentQIndex + 1} : </span> {currentQuestion.question}
      </h1>
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
      <p className="text-2xl py-3 text-center bg-white border rounded-xl border-amber-200">
        Your score is {score}
      </p>
      <button
        onClick={() => dispatch(resetQuiz())}
        className="mt-6 px-6 py-2 bg-blue-400 text-white rounded-xl hover:bg-blue-900 transition"
      >
        Reset Quiz
      </button>

      {/* <button
        onClick={() => dispatch(submitAnswer("this is me"))}
        className="border px-3 py-2 rounded-lg"
      >
        Quiz
      </button> */}
    </div>
  );
};

export default Quiz;
