import React from "react";
import { useForm } from "react-hook-form";
// context
import { FIELD_CHARS_LIMIT } from "@/context/constants";
// style
import styles from "./input.module.scss";

type Props = {
  inputName: string;
  err?: string;
  required?: boolean;
};

export default function Input({ inputName, err, required }: Props) {
  const { register } = useForm();

  return (
    <div className={`group ${styles.inputWrapper}`}>
      <input
        {...register(inputName, {
          required: required && "This field is required!",
          maxLength: {
            value: FIELD_CHARS_LIMIT,
            message: "Field max length is 80 characters!",
          },
        })}
        type="text"
        className={err ? styles.alertingBorder : ""}
        // disabled={}
      />
      {err && <p className={styles.fieldErrorMsg}>{err}</p>}
    </div>
  );
}
