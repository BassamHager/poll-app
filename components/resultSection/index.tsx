import React, { useContext } from "react";
import Section from "../section";
import { AppContext } from "@/context/AppContext";
import ResultSectionFooter from "./resultSectionFooter";
import ResultSectionBody from "./resultSectionBody";

type Props = {};

export default function ResultSection({}: Props) {
  const { pollQuestion, pollAnswers } = useContext(AppContext);

  return (
    <>
      {pollQuestion && pollAnswers.length > 1 ? (
        <Section
          header={<h2>{pollQuestion}</h2>}
          body={<ResultSectionBody />}
          footer={<ResultSectionFooter />}
        />
      ) : (
        <section></section>
      )}
    </>
  );
}
