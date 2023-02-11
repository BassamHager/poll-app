import React, { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import SectionFooter from "../../section/sectionFooter/index";
// types
import { IPollVote } from "@/types/typings";

export default function ResultSectionFooter() {
  // context
  const { pollVotes } = useContext(AppContext);

  const countValidVotes = () => {
    const total = pollVotes.reduce((acc: number, cur: IPollVote) => {
      acc += cur.votesCount;
      return acc;
    }, 0);
    return total;
  };

  return <SectionFooter text={`Total votes: ${countValidVotes()}`} />;
}
