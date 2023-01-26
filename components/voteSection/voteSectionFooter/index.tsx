import SectionFooter from "@/components/section/sectionFooter";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

type Props = {};

export default function VoteSectionFooter({}: Props) {
  const { selectedIndex, votesCount, setVotesCount } = useContext(AppContext);
  const vote = () => {
    const clicks = votesCount + 1;
    setVotesCount(clicks);
  };

  return <SectionFooter actionButton={<button onClick={vote}>Vote</button>} />;
}
