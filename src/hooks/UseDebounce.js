import { useRef } from "react";

const useDebounceFn = (callback, delay = 1000) => {
  const timerRef = useRef();

  const debouncedFn = (...args) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFn;
};

export default useDebounceFn;
