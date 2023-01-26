import React, { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import RadioGroup from "./radioGroup";
import Section from "../section";
import VoteSectionFooter from "./voteSectionFooter";
// types
import { AnswerType } from "@/types/typings";
// style

export default function VoteSection() {
  // context
  const { pollAnswers, pollQuestion } = useContext(AppContext);

  return (
    <>
      {pollQuestion && pollAnswers.length > 1 ? (
        <Section
          header={<h2>{pollQuestion}</h2>}
          body={
            <RadioGroup
              onChange={(index) =>
                console.log("hi", index)
              } /* remove this @TODO: */
              options={pollAnswers.map((answer: AnswerType) => {
                return (
                  <label
                    id={answer.id}
                    key={answer.id}
                    className="flex items-center mt-[2rem] cursor-pointer w-fit h-[3.3rem]"
                  >
                    <input
                      name="voteOption"
                      type="radio"
                      className="peer cursor-pointer mr-[.5rem]"
                    />
                    <p className="select-none"> {answer.value} </p>
                  </label>
                );
              })}
            ></RadioGroup>
          }
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
