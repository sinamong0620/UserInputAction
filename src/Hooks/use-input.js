import { useState } from "react";
const useInput = (validateFunc) => {
  //동일한 로직을 custom hook으로 빼주기
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateFunc(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputChangeHandler = ({ target }) => {
    setEnteredValue(target.value);
  };
  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched("");
  };

  return {
    enteredValue,
    enteredValueIsValid,
    valueInputIsInvalid,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};
export default useInput;
