import { ReactNode } from "react";
// style
import styles from "./sectionFooter.module.scss";

type Props = {
  text?: string;
  actionButton?: ReactNode;
};

export default function SectionFooter({ text, actionButton }: Props) {
  return (
    <div className={styles.sectionFooterWrapper}>
      {text && text}
      {actionButton && actionButton}
    </div>
  );
}
