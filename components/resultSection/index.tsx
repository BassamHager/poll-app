import React, { useContext, useEffect } from "react";
import Section from "../section";
import { AppContext } from "@/context/AppContext";
import ResultSectionFooter from "./resultSectionFooter";
import { AnswerType } from "@/types/typings";
import ResultSectionBody from "./resultSectionBody";

type Props = {};

export default function ResultSection({}: Props) {
  const { pollQuestion } = useContext(AppContext);
  // let answers: AnswerType[];

  // useEffect(() => {
  //   answers = pollAnswers.map((answer: AnswerType) => ({
  //     value: answer.value,
  //     totalVotes: 0,
  //   }));
  // }, []);

  return (
    <Section
      header={<h2>{pollQuestion}</h2>}
      body={<ResultSectionBody />}
      footer={<ResultSectionFooter />}
    />
  );
}
