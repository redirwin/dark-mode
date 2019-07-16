import React from "react";

import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(darkOn) {
  const [darkMode, setDarkMode] = useLocalStorage(darkOn);
}
