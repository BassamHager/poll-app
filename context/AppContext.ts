import { createContext, useState } from "react";
// types
import { AnswerType } from "@/types/typings";

export const AppContext = createContext<any>({});

export const ContextValue = () => {
  // poll question
  const [pollQuestion, setPollQuestion] = useState<string>(
    "What is the value of ∏?"
  );

  // poll answers
  const [pollAnswers, setPollAnswers] = useState<AnswerType[]>([
    { value: "3.14", id: "1" },
    { value: "3.1416", id: "2" },
    { value: "3.14159264", id: "3" },
  ]);

  // addAnswerError
  const [addAnswerError, setAddAnswerError] = useState<string>("");

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
  };

  return contextValue;
};
