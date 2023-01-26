import Link from "next/link";
// components
import CreatePollSection from "@/components/createPollSection";
import VoteSection from "@/components/voteSection";
import ResultSection from "../../components/resultSection/index";
// style
import styles from "./poll.module.scss";

export default function Poll() {
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

      <div className={styles.homeButtonContainer}>
        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
}
