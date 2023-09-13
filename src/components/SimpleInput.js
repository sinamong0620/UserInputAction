import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: validValue,
    valueInputIsInvalid: nameInputIsInvalid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset,
  } = useInput((enteredName) => enteredName.trim() !== "");

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: validEmailValue,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((enteredValue) => enteredValue.includes("@"));

  let formIsValid = false;

  if (validEmailValue && validValue) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!validValue || !validEmailValue) {
      return; //return을 함으로써 그 아래 코드는 실행되지 않도록
    }
    console.log("제출댐");

    reset();
    emailReset();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="text"
          id="e-mail"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
