import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// context
import { FIELD_CHARS_LIMIT } from "@/context/constants";
import { AppContext } from "@/context/AppContext";
// style
import styles from "./createPollSectionHeader.module.scss";

export default function CreatePollSectionHeader() {
  // context
  const { pollQuestion, setPollQuestion } = useContext(AppContext);

  // useFrom
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { pollQuestion, pollAnswer: "" } });

  return (
    <form className={styles.createPollSectionHeaderWrapper}>
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
          value={pollQuestion || ""}
          onChange={(e) => setPollQuestion(e.target.value)}
        />
      </div>
    </form>
  );
}
