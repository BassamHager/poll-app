import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import shortid from "shortid";
// context
import { FIELD_CHARS_MAX_LIMIT, POLL_MAX_ANSWERS } from "@/context/constants";
import { AppContext } from "@/context/AppContext";
// style
import styles from "./createPollSectionBody.module.scss";
// components
import PollAnswers from "./pollAnswers";

export default function CreatePollSectionBody() {
  // context
  const {
    pollAnswers,
    setPollAnswers,
    addAnswerError,
    setAddAnswerError,
    pollQuestion,
  } = useContext(AppContext);

  // internal state - for disabling the add button once empty
  const [isDisabledAdd, setIsDisabledAdd] = useState<boolean>(false);

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

    // alert duplications
    if (answerValue && pollAnswers) {
      for (const { value } of pollAnswers) {
        if (value === answerValue) {
          setAddAnswerError("This answer is existed!");
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

  useEffect(() => {
    const inputValue = watch("pollAnswer");
    setIsDisabledAdd(
      !pollQuestion ||
        pollAnswers?.length >= POLL_MAX_ANSWERS ||
        inputValue.trim().length >= FIELD_CHARS_MAX_LIMIT
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollQuestion, pollAnswers.length, watch("pollAnswer")]);

  return (
    <div className={styles.createPollSectionBodyWrapper}>
      <PollAnswers />

      {/* add a poll answer */}
      <form onSubmit={handleSubmit(() => {})}>
        <div className={styles.addAnswerWrapper}>
          <div className={`group ${styles.inputWrapper}`}>
            {pollAnswers?.length < POLL_MAX_ANSWERS ? (
              <input
                disabled={isDisabledAdd}
                {...register("pollAnswer", {
                  maxLength: {
                    value: FIELD_CHARS_MAX_LIMIT,
                    message: "Field max length is 80 characters!",
                  },
                })}
                type="text"
                className={addAnswerError ? styles.alertingBorder : ""}
                placeholder="Type an answer"
              />
            ) : (
              <p className={styles.overflowError}>
                You can not add more than 10
              </p>
            )}

            {errors.pollAnswer?.message ||
              (addAnswerError && (
                <p className={styles.fieldErrorMsg}>
                  {errors.pollAnswer?.message || addAnswerError}
                </p>
              ))}
          </div>

          <button
            disabled={isDisabledAdd}
            onClick={addAnswer}
            className={
              !pollQuestion || pollAnswers.length >= POLL_MAX_ANSWERS
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
