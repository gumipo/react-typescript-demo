import React from "react";
import styles from "../../styles/atoms/form.module.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type: string;
}

const TextInput: React.FC<Props> = React.memo(({ onChange, value, type }) => {
  return (
    <input
      className={styles.form__text}
      onChange={(e) => onChange(e)}
      value={value}
      type={type}
    />
  );
});

export default TextInput;
