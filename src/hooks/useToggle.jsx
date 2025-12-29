import { useState } from "react";

function useToggle(initialvalue = false) {
  const [value, setValue] = useState(initialvalue);

  function toggle() {
    setValue(!value);
  }

  return [value, toggle];
}

export default useToggle;
