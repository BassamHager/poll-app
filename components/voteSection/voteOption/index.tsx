import React, { ReactNode } from "react";

type Props = {
  index: number;
  selectedIndex?: number;
  onSelect: (index: number) => void;
  children: ReactNode;
};

export default function VoteOption({
  selectedIndex,
  index,
  onSelect,
  children,
}: Props) {
  const isSelected = index === selectedIndex; /* for style */
  return (
    <div
      className={`w-fit ${isSelected && "font-medium"}`}
      onClick={() => onSelect(index)}
    >
      {children}
    </div>
  );
}
