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
    <div className={`flex justify-evenly mt-[10rem] h-full`}>
      {answers.map((answer: { value: string; totalVotes: number }) => {
        return (
          <div key={answer.value} className={`w-full flex flex-col`}>
            <div className="m-auto">{answer.totalVotes}</div>
            <div className="border h-full"></div>
            <p className="m-auto">{answer.value}</p>
          </div>
        );
      })}
    </div>
  );
}
