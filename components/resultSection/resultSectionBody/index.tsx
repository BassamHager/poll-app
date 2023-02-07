import React, { useContext, useState } from "react";
// context
import { AppContext } from "@/context/AppContext";
// style
import styles from "./resultSectionBody.module.scss";
// types
import { IPollVote } from "@/types/typings";

export default function ResultSectionBody() {
  // context
  const { pollVotes } = useContext(AppContext);
  // internal state
  const [resultFullTitle, setResultFullTitle] = useState("");

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
      <div className={styles.graphWithCounts}>
        {pollVotes.map((result: IPollVote) => {
          return (
            <div
              key={result.id}
              className={`${styles.resultCol} ${
                pollVotes.length > 5 ? `max-w-[${pollVotes.length}%]` : ""
              }`}
              onMouseOver={() => setResultFullTitle(result.value)}
              onMouseOut={() => setResultFullTitle("")}
            >
              <div className={styles.votesCount}>{result.votesCount}</div>

              <div className={styles.colBoxes}>
                {[...Array(result.votesCount)].length ? (
                  [...Array(result.votesCount)].map((_, ind) => {
                    return <div key={ind} className={`${styles.colBox} `} />;
                  })
                ) : (
                  <div className={`${styles.colBox}`} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.colTitleContainer}>
        {pollVotes.map((result: IPollVote) => {
          return (
            <p
              key={result.id}
              className={styles.colTitle}
              onMouseOver={() => setResultFullTitle(result.value)}
              onMouseOut={() => setResultFullTitle("")}
            >
              {substringAnswer(result.value)}
            </p>
          );
        })}
      </div>

      {/* cursor hover message */}
      <p className={styles.resultFullTitle}>{resultFullTitle}</p>
    </div>
  );
}
