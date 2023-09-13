import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};
const useInputLogic = (validFunc) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validFunc(inputState.value);
  const valudIsInValid = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = ({ target }) => {
    dispatch({ type: "INPUT", value: target.value });
  };

  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });

    //true로만 하고 다시 false로 돌리지 않아도 되는 걸까나?
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
    valudIsInValid,
  };
};

export default useInputLogic;
