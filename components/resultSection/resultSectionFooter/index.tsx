import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";
import SectionFooter from "../../section/sectionFooter/index";

type Props = {};

export default function ResultSectionFooter({}: Props) {
  const { votesCount } = useContext(AppContext);

  return <SectionFooter text={`Total votes: ${votesCount}`} />;
}
