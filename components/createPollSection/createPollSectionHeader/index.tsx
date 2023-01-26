import React, { useState } from "react";
import { useForm } from "react-hook-form";
// context
import { FIELD_CHARS_LIMIT } from "@/context/constants";
// style
import styles from "./createPollSectionHeader.module.scss";

export default function CreatePollSectionHeader() {
  // internal state
  const [pollQuestion, setPollQuestion] = useState<string>(
    "What is the value of ∏?"
  );

  // useFrom
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { pollQuestion, pollAnswer: "" } });

  return (
    <form
      onSubmit={handleSubmit(() => {
        setPollQuestion(watch("pollQuestion"));
      })}
      className={styles.createPollSectionHeaderWrapper}
    >
      {/* section header - poll question */}
      <div className={`group ${styles.inputWrapper}`}>
        <input
          {...register("pollQuestion", {
            required: "This field is required!",
            maxLength: {
              value: FIELD_CHARS_LIMIT,
              message: "Field max length is 80 characters!",
            },
          })}
          disabled={watch("pollQuestion").length >= FIELD_CHARS_LIMIT}
          type="text"
          className={errors.pollQuestion?.message ? styles.alertingBorder : ""}
        />
        {errors.pollQuestion?.message && (
          <p className={styles.fieldErrorMsg}>{errors.pollQuestion?.message}</p>
        )}
      </div>
    </form>
  );
}
