import React, { useContext, useEffect } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import VoteOption from "./voteOption/index";
// style
import styles from "./voteSectionBody.module.scss";
// types
import { IPollVote, IPollAnswer } from "@/types/typings";

export default function VoteSectionBody() {
  // context
  const { pollAnswers, pollVotes, setPollVotes } = useContext(AppContext);

  // mapping poll answers into voting options by adding a boolean switch to identify the selected vote & a votes count
  useEffect(() => {
    const votes = pollAnswers.map((answer: IPollAnswer) => ({
      ...answer,
      isSelected: false,
      votesCount: 0,
    }));
    setPollVotes(votes);
  }, [pollAnswers]);

  return (
    <div className={styles.voteSectionBodyWrapper}>
      {pollVotes.map((voteOption: IPollVote) => {
        return <VoteOption vote={voteOption} key={voteOption.id} />;
      })}
    </div>
  );
}
