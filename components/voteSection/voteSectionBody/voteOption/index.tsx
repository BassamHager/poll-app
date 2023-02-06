import React, { useContext } from "react";
// context
import { AppContext } from "../../../../context/AppContext";
// style
import styles from "./voteOption.module.scss";
// types
import { IPollVote } from "@/types/typings";

type Props = {
  vote: IPollVote;
};

export default function VoteOption({ vote }: Props) {
  // context
  const { pollVotes, setPollVotes } = useContext(AppContext);

  const selectAnswer = (id: string) => {
    const updatedVotes = pollVotes.map((vote: IPollVote) => ({
      ...vote,
      isSelected: vote.id === id,
    }));
    setPollVotes(updatedVotes);
  };

  return (
    <div
      className={`${styles.voteOptionWrapper} ${
        vote?.isSelected ? "font-medium" : ""
      }`}
      onClick={() => selectAnswer(vote.id)}
    >
      <label>
        <input name="voteOption" type="radio" />
        <p> {vote.value} </p>
      </label>
    </div>
  );
}
