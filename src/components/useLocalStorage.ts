import React from "react";

const useLocalStorage = (localStorageKey: string, fallbackValue: any) => {
  const [value, setValue] = React.useState(fallbackValue);
  console.log("value inside custom hook", value);

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
    console.log("value inside useeffect hook");
  }, [value, localStorageKey]);

  return [value, setValue];
};
export default useLocalStorage;
