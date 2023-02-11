import React, { useContext, useEffect, useState } from "react";
// context
import { AppContext } from "../../../context/AppContext";
// components
import SectionFooter from "@/components/section/sectionFooter";
// types
import { IPollVote } from "@/types/typings";

export default function VoteSectionFooter() {
  // context
  const { pollVotes, setPollVotes } = useContext(AppContext);

  // internal state
  const [isDisabled, setIsDisabled] = useState(false);

  const vote = () => {
    const updatedResults = pollVotes.map((result: IPollVote) => ({
      ...result,
      votesCount: result.isSelected ? result.votesCount + 1 : result.votesCount,
    }));
    setPollVotes(updatedResults);
  };

  const disableVoting = (): boolean =>
    !pollVotes.some((vote: IPollVote) => vote.isSelected);

  useEffect(() => {
    setIsDisabled(disableVoting());
  }, [pollVotes]);

  return (
    <SectionFooter
      actionButton={
        <button onClick={vote} disabled={isDisabled}>
          Vote
        </button>
      }
    />
  );
}
