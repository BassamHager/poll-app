import SectionFooter from "@/components/section/sectionFooter";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

type Props = {};

export default function VoteSectionFooter({}: Props) {
  const { selectedIndex } = useContext(AppContext);
  const vote = () => {
    console.log(selectedIndex, "is selected!");
  };

  return <SectionFooter actionButton={<button onClick={vote}>Vote</button>} />;
}
