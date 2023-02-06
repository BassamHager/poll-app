import React, { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import Section from "../section";
import ResultSectionFooter from "./resultSectionFooter";
import ResultSectionBody from "./resultSectionBody";

export default function ResultSection() {
  // context
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
        <section /> /* empty section tag needed for styling purposes */
      )}
    </>
  );
}
