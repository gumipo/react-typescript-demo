import React from "react";
import styles from "../../styles/atoms/button.module.scss";

interface Props {
  onClick: () => void;
  label: string;
}

const SearchButton: React.FC<Props> = React.memo(({ onClick, label }) => {
  return (
    <button onClick={onClick} className={styles.button__search}>
      {label}
    </button>
  );
});

export default SearchButton;
