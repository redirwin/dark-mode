import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [storedValue, setStoredValue] = useLocalStorage("dark-on");

  useEffect(() => {
    storedValue
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [storedValue]);
  return [storedValue, setStoredValue];
}
