import { useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import SectionFooter from "@/components/section/sectionFooter";

export default function CreatePollSectionFooter() {
  const { pollAnswers } = useContext(AppContext);
  const text = `${pollAnswers.length}/10 possible answers`;

  return <SectionFooter text={text} actionButton={<button>Reset</button>} />;
}
