import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import shortid from "shortid";
// context
import { FIELD_CHARS_LIMIT, POLL_MAX_ANSWERS } from "@/context/constants";
import { AppContext } from "@/context/AppContext";
// style
import styles from "./createPollSectionBody.module.scss";
// components
import PollAnswers from "../pollAnswers";

export default function CreatePollSectionBody() {
  // context
  const { pollAnswers, setPollAnswers, addAnswerError, setAddAnswerError } =
    useContext(AppContext);

  // useForm
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm({ defaultValues: { pollAnswer: "" } });

  const addAnswer = () => {
    const answerValue = watch("pollAnswer");
    if (!answerValue?.trim()) return;

    // alert duplications
    if (pollAnswers) {
      for (const { value } of pollAnswers) {
        if (value === answerValue) {
          setAddAnswerError("This answer is existed!");
          resetField("pollAnswer");
          return;
        }
      }

      setAddAnswerError("");
      const answers = [...pollAnswers];
      const answer = { value: answerValue, id: shortid.generate() };
      answers.push(answer);
      setPollAnswers(answers);
    }
    resetField("pollAnswer");
  };

  return (
    <div className={styles.createPollSectionBodyWrapper}>
      {/* poll answers */}
      <PollAnswers pollAnswers={pollAnswers} setPollAnswers={setPollAnswers} />

      {/* add a poll answer */}
      <form onSubmit={handleSubmit(() => {})}>
        <div className={styles.addAnswerWrapper}>
          <div className={`group ${styles.inputWrapper}`}>
            {pollAnswers && pollAnswers.length < POLL_MAX_ANSWERS ? (
              <input
                {...register("pollAnswer", {
                  maxLength: {
                    value: FIELD_CHARS_LIMIT,
                    message: "Field max length is 80 characters!",
                  },
                })}
                type="text"
                className={
                  errors.pollAnswer?.message ? styles.alertingBorder : ""
                }
                placeholder="Type an answer"
              />
            ) : (
              <p className={styles.overflowError}>You can't add more than 10</p>
            )}

            {errors.pollAnswer?.message ||
              (addAnswerError && (
                <p className={styles.fieldErrorMsg}>
                  {errors.pollAnswer?.message || addAnswerError}
                </p>
              ))}
          </div>

          <button
            disabled={pollAnswers && pollAnswers.length >= POLL_MAX_ANSWERS}
            onClick={addAnswer}
            className={
              pollAnswers && pollAnswers.length >= POLL_MAX_ANSWERS
                ? "disabled"
                : ""
            }
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
