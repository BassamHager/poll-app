import { useContext, useEffect, useState } from "react";
// context
import { AppContext } from "../../../../context/AppContext";
// style
import styles from "./pollAnswers.module.scss";
// types
import { IPollAnswer } from "@/types/typings";

export default function PollAnswers() {
  // context
  const { setPollAnswers, pollAnswers } = useContext(AppContext);

  const deleteAnswer = (id: string) => {
    const filteredAnswers = pollAnswers.filter(
      (answer: IPollAnswer) => answer.id !== id
    );
    setPollAnswers(filteredAnswers);
  };

  return (
    <div className={styles.pollAnswersWrapper}>
      {pollAnswers.map((answer: IPollAnswer) => {
        return (
          <div key={answer.id} className={styles.addAnswerWrapper}>
            <p className={`group ${styles.inputWrapper}`}>{answer.value}</p>

            <button type="button" onClick={() => deleteAnswer(answer.id)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
