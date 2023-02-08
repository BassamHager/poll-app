import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// context
import { FIELD_CHARS_MAX_LIMIT } from "@/context/constants";
import { AppContext } from "@/context/AppContext";
// style
import styles from "./createPollSectionHeader.module.scss";

export default function CreatePollSectionHeader() {
  // context
  const { pollQuestion, setPollQuestion } = useContext(AppContext);
  // internal state
  const [isDisabled, setIsDisabled] = useState(false);

  // useFrom
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { pollQuestion, pollAnswer: "" } });

  useEffect(() => {
    setIsDisabled(pollQuestion.length >= FIELD_CHARS_MAX_LIMIT);
  }, [pollQuestion]);

  return (
    <form
      className={styles.createPollSectionHeaderWrapper}
      onSubmit={(e) => e.preventDefault()}
    >
      {/* section header - poll question */}
      <div className={`group ${styles.inputWrapper}`}>
        <input
          {...register("pollQuestion", {
            required: "This field is required!",
            maxLength: {
              value: FIELD_CHARS_MAX_LIMIT,
              message: "Field max length is 80 characters!",
            },
          })}
          disabled={isDisabled}
          type="text"
          className={errors.pollQuestion?.message ? styles.alertingBorder : ""}
          value={pollQuestion || ""}
          onChange={(e) => setPollQuestion(e.target.value)}
          placeholder="Type a poll question"
        />
      </div>
    </form>
  );
}
