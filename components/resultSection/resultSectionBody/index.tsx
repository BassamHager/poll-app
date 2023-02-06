import React, { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// style
import styles from "./resultSectionBody.module.scss";
// types
import { IPollVote } from "@/types/typings";

export default function ResultSectionBody() {
  // context
  const { pollVotes } = useContext(AppContext);

  // for displaying a part of each answer due to styling purposes
  const substringAnswer = (text: string): string => {
    if (text?.length > 7) {
      const displayedPart = text.substring(0, 7);
      return displayedPart;
    }
    return text;
  };

  return (
    <div className={styles.resultSectionBodyWrapper}>
      {pollVotes.map((result: IPollVote) => {
        return (
          <div
            key={result.id}
            className={`${styles.resultCol} ${
              pollVotes.length > 5 ? `max-w-[${pollVotes.length}%]` : ""
            }`}
          >
            <div className={styles.votesCount}>{result.votesCount}</div>
            <div className={styles.colBox}></div>
            <p
              className={`${styles.colTitle} ${
                pollVotes.length > 3 ? styles.rotateText : ""
              }`}
            >
              {substringAnswer(result.value)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
