import React, { useState } from "react";
import styles from "../../styles/utility/flex.module.scss";
import { TextInput, SearchButton } from "../atoms";
import { useStringChangeEvent } from "../../lib/customhooks";
import { searchHotels } from "../../lib/hotels";

const SearchField: React.FC = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className={styles.flex__row_center}>
      <TextInput
        onChange={useStringChangeEvent(setKeyword)}
        value={keyword}
        type="text"
      />
      <SearchButton onClick={() => searchHotels(keyword)} label="検索" />
    </div>
  );
};

export default SearchField;
