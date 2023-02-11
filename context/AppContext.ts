import { Dispatch, SetStateAction, createContext, useState } from "react";
// types
import { IPollAnswer, IPollVote } from "@/types/typings";

export const AppContext = createContext<any>({});

export const ContextValue = (): {
  pollQuestion: string /* @TODO: continue typing & move it to types */;
  setPollQuestion: Dispatch<SetStateAction<string>>;
} => {
  // poll creation
  // poll creation - question
  const [pollQuestion, setPollQuestion] = useState<string>(
    "What is the value of ∏?"
  );
  // poll creation - answers
  const [pollAnswers, setPollAnswers] = useState<IPollAnswer[]>([
    { value: "3.14", id: "1" },
    { value: "3.1416", id: "2" },
    { value: "3.14159264", id: "3" },
  ]);
  // poll creation - addAnswerError
  const [addAnswerError, setAddAnswerError] = useState<string>("");

  // vote section
  // vote section - votes
  const [pollVotes, setPollVotes] = useState<IPollVote[]>([]);

  const contextValue = {
    // poll question
    pollQuestion,
    setPollQuestion,

    // poll answers
    pollAnswers,
    setPollAnswers,

    // addAnswerError
    addAnswerError,
    setAddAnswerError,

    // vote section - selected answer
    pollVotes,
    setPollVotes,
  };

  return contextValue;
};
