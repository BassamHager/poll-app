import { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import SectionFooter from "@/components/section/sectionFooter";

export default function CreatePollSectionFooter() {
  const { setPollQuestion, pollAnswers, setPollAnswers } =
    useContext(AppContext);

  const text = `${pollAnswers.length}/10 possible answers`;

  const reset = () => {
    setPollQuestion("");
    setPollAnswers([]);
  };

  return (
    <SectionFooter
      text={text}
      actionButton={<button onClick={reset}>Reset</button>}
    />
  );
}
