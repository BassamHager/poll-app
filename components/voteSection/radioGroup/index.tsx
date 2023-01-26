import React, { ReactElement, useContext } from "react";
// context
import { AppContext } from "@/context/AppContext";
// components
import VoteOption from "../voteOption/index";
// style
import styles from "./radioGroup.module.scss";

type Props = {
  options: ReactElement[];
  onChange?: (selectedIndex: number) => void;
  value?: number;
};

export default function RadioGroup({ options, onChange, value }: Props) {
  const { selectedIndex, setSelectedIndex } = useContext(AppContext);

  const onSelect = (ind: number) => {
    setSelectedIndex(ind);
    onChange && onChange(ind);
  };

  return (
    <div className={styles.radioGroupWrapper}>
      {options.map((el, ind) => {
        return (
          <VoteOption
            key={ind}
            index={ind}
            selectedIndex={selectedIndex}
            onSelect={() => onSelect(ind)}
          >
            {el}
          </VoteOption>
        );
      })}
    </div>
  );
}
