import React, { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import Section from "../section";
import VoteSectionFooter from "./voteSectionFooter";
import VoteSectionBody from "./voteSectionBody/index";

export default function VoteSection() {
  // context
  const { pollAnswers, pollQuestion } = useContext(AppContext);

  return (
    <>
      {pollQuestion && pollAnswers.length > 1 ? (
        <Section
          header={<h2>{pollQuestion}</h2>}
          body={<VoteSectionBody />}
          footer={<VoteSectionFooter />}
        />
      ) : (
        <section>
          <h2>
            There should be added a poll question & 2 answers at least in order
            to vote!
          </h2>
        </section>
      )}
    </>
  );
}
