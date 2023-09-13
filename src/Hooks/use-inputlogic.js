import { useState } from "react";
const useInputLogic = (validFunc) => {
  const [value, setValue] = useState("");
  const [blurValue, setBlurValue] = useState(false);
  const valueIsValid = validFunc(value);
  const valudIsInValid = !valueIsValid && blurValue;

  const valueChangeHandler = ({ target }) => {
    setValue(target.value);
  };

  const valueBlurHandler = () => {
    setBlurValue(true);
    //true로만 하고 다시 false로 돌리지 않아도 되는 걸까나?
  };

  const reset = () => {
    setValue("");
    setBlurValue(false);
  };

  return {
    value,
    valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
    valudIsInValid,
  };
};

export default useInputLogic;
