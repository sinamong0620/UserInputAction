import { useState } from "react";
const userInput = () => {
  const [value, setValue] = useState("");
  const [blurValue, setBlurValue] = useState(false);
  const valueIsValid = value.trim() !== "";

  const valueChangeHandler = ({ target }) => {
    setValue(target.value);
  };

  const valueBlurHandler = () => {
    setBlurValue(true);
    //true로만 하고 다시 false로 돌리지 않아도 되는 걸까나?
  };

  return { value, valueIsValid, valueChangeHandler, valueBlurHandler };
};

export default userInput;
