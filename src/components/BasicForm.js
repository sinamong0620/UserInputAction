import { useState } from "react";
import userInputLogic from "../Hooks/use-inputlogic.js";

const BasicForm = (props) => {
  //헉 로직 하나도 없다!
  const {
    value: firstValue,
    valueIsValid: firstIsValid,
    valueChangeHandler: firstChangeHandler,
    valueBlurHandler: firstBlurHandler,
    reset: firstReset,
    valudIsInValid: firstIsInValid,
  } = userInputLogic((firstValue) => firstValue.trim() !== "");

  const {
    value: lastValue,
    valueIsValid: lastIsValid,
    valueChangeHandler: lastChangeHandler,
    valueBlurHandler: lastBlurHandler,
    reset: lastReset,
    valudIsInValid: lastIsInValid,
  } = userInputLogic((lastValue) => lastValue.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
    valudIsInValid: emailIsInValid,
  } = userInputLogic((email) => email.includes("@"));

  const submitHandler = (e) => {
    e.preventDefault();

    if (!firstIsValid || !lastIsValid) {
      return;
    }
    console.log("제출댐");
    firstReset();
    lastReset();
    emailReset();
  };

  const firstNameIsInValidStyle = firstIsInValid
    ? "form-control invalid"
    : "form-control";
  const lastNameIsInValidStyle = lastIsInValid
    ? "form-control invalid"
    : "form-control";
  const emailIsInValidStyle = lastIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameIsInValidStyle}>
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            id="first"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={firstValue}
          />
          {firstIsInValid && <p>please type first name</p>}
        </div>
        <div className={lastNameIsInValidStyle}>
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={lastValue}
          />
          {lastIsInValid && <p>please type last name</p>}
        </div>
      </div>
      <div className={emailIsInValidStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsInValid && <p>please type email </p>}
      </div>
      <div className="form-actions">
        <button disabled={!firstIsValid || !lastIsValid || !emailIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
