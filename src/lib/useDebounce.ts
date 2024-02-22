import React, { useEffect, useState } from "react";

// This function is used to wait function call while user is typing
// because it's not efficient to call function and update database for each letter typing.
export function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}
