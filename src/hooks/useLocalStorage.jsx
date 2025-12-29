import { useState, useEffect } from "react";

function useLocalStorage(key, initialvalue) {
  function getDataToLocalStorage() {
    try {
      const data = localStorage.getItem(key);
      if (data === null) return initialvalue;
      const dataParse = JSON.parse(data);
      return Array.isArray(dataParse) ? dataParse : [];
    } catch (error) {
      console.error("Ошибка чтения данных из Хранилища", error);
      return initialvalue;
    }
  }

  const [value, setValue] = useState(() => getDataToLocalStorage());

  function setValueToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Ошибка записи данных в localStorage", error);
    }
  }

  useEffect(() => {
    setValueToLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
