import React, { useContext, useEffect, useState } from "react";
// context
import { AppContext } from "@/context/AppContext";
// style
import styles from "./resultSectionBody.module.scss";
// types
import { IPollResultCol } from "@/types/typings";

export default function ResultSectionBody() {
  // context
  const { pollVotes } = useContext(AppContext);
  // internal state
  const [answers, setAnswers] = useState<IPollResultCol[]>([]);

  // map votes into result columns
  useEffect(() => {
    const mapped = pollVotes.map((answer: IPollResultCol) => ({
      value: answer.value,
      totalVotes: 0,
    }));
    setAnswers(mapped);
  }, [pollVotes, answers.length]);

  // for displaying a part of each answer due to styling purposes
  const substringAnswer = (text: string): string => {
    if (text.length > 7) {
      const displayedPart = text.slice(7);
      return displayedPart;
    }
    return text;
  };

  return (
    <div className={styles.resultSectionBodyWrapper}>
      {answers.map((answer) => {
        return (
          <div
            key={answer.value}
            className={`${styles.resultCol} ${
              answers.length > 5 ? `max-w-[${answers.length}%]` : ""
            }`}
          >
            <div className={styles.votesCount}>{answer.votesCount}</div>
            <div className={styles.colBox}></div>
            <p
              className={`${styles.colTitle} ${
                answers.length > 3 ? styles.rotateText : ""
              }`}
            >
              {substringAnswer(answer.value)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
