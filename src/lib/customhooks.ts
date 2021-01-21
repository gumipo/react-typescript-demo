import { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";

type UseChangeEvent<T> = {
  (update: Dispatch<SetStateAction<T>>): (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
};

export const useStringChangeEvent: UseChangeEvent<string> = (update) => {
  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      update(e.target.value);
    },
    [update]
  );
};

export const useNumberChangeEvent: UseChangeEvent<number> = (update) => {
  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (/^[0-9]+$/.test(e.target.value)) {
        update(Number(e.target.value));
      }
    },
    [update]
  );
};
