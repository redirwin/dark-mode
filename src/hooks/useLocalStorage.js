import React, { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, updateStoredValue] = useState(() => {
    const item = localStorage.get(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
