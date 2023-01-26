// style
import styles from "./pollAnswers.module.scss";
// types
import { AnswerType } from "@/types/typings";

type Props = {
  pollAnswers?: AnswerType[];
  setPollAnswers?: any;
};

export default function PollAnswers({ pollAnswers, setPollAnswers }: Props) {
  const deleteAnswer = (id: string) => {
    setPollAnswers &&
      setPollAnswers((pre: AnswerType[]) =>
        pre.filter((answer) => answer.id !== id)
      );
  };

  return (
    <div className={styles.pollAnswersWrapper}>
      {pollAnswers &&
        pollAnswers.map((answer) => {
          return (
            <div key={answer.id} className={styles.addAnswerWrapper}>
              <p className={`group ${styles.inputWrapper}`}>{answer.value}</p>

              <button type="button" onClick={() => deleteAnswer(answer.id)}>
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}
