import React, { ReactNode } from "react";
// style
import styles from "./section.module.scss";

type Props = {
  header: ReactNode | string;
  body: ReactNode | string;
  footer: ReactNode | string;
};

export default function Section({ header, body, footer }: Props) {
  return (
    <section className={styles.sectionWrapper}>
      {header}
      {body}
      {footer}
    </section>
  );
}
