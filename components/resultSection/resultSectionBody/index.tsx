import { AppContext } from "@/context/AppContext";
import { AnswerType } from "@/types/typings";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

export default function ResultSectionBody({}: Props) {
  const { pollAnswers } = useContext(AppContext);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const mapped = pollAnswers.map((answer: AnswerType) => {
      return {
        value: answer.value,
        totalVotes: 0,
      };
    });
    setAnswers(mapped);
  }, [pollAnswers]);

  return (
    <div className={`flex justify-center`}>
      {answers.map((answer: { value: string; totalValue: number }) => {
        return (
          <div
            key={answer.value}
            className={`max-w-1/${answers.length} border`}
          >
            <p>{answer.value}</p>
          </div>
        );
      })}
    </div>
  );
}
