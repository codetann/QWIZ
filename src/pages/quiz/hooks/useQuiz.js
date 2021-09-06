import React, { useState, useEffect } from "react";
import { parseData } from "../../../utils/parse";
import axios from "axios";

export function useQuiz(id, level) {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [index, setIndex] = useState(1);

  const isFinished = index > 11 ? false : true;

  // fetch quiz questions
  useEffect(() => {
    console.log(id, level);
    const URL = `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${level}&type=multiple`;
    axios
      .get(URL)
      .then((res) => {
        setQuestions(parseData(res.data.results));
      })
      .catch((err) => console.log(err));

    // return () => {
    //   setQuestions([]);
    // };
  }, []);

  // quiz functions
  const checkAnswer = (e) => {
    e.target.variant = "solid";

    if (e.target.value === questions[index - 1].correct_answer) {
      e.target.style.background = "green";
      setScore((prevState) => prevState + 1);
    } else {
      e.target.style.background = "red";
    }

    setTimeout(() => {
      setIndex((prevState) => prevState + 1);
    }, 1000);
  };

  return { checkAnswer, isFinished, score, answered, index, questions };
}
