import CreatePollSection from "@/components/createPollSection";
import VoteSection from "@/components/voteSection";
import Link from "next/link";
import styles from "./poll.module.scss";
import ResultSection from "../../components/resultSection/index";

type Props = {};

export default function Poll({}: Props) {
  return (
    <section className={styles.pollWrapper}>
      <header>
        <h1>Sir Vote-a-lot</h1>
      </header>

      <div className={styles.pollSections}>
        <CreatePollSection />
        <VoteSection />
        <ResultSection />
      </div>

      <Link href="/">
        <div className={styles.homeButtonContainer}>
          <button>Home</button>
        </div>
      </Link>
    </section>
  );
}
