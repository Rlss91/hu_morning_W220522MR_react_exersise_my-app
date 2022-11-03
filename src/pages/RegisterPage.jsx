import { useState } from "react";
import validation from "../validation/validation";
import registerSchema from "../validation/register.validation";

const RegisterPage = () => {
  const [userInput, setUserInput] = useState({
    emailInput: "",
    passwordInput: "",
    firstnameInput: "",
    lastnameInput: "",
  });
  const [userInputErrors, setUserInputErrors] = useState({
    emailInput: [],
    passwordInput: [],
    firstnameInput: [],
    lastnameInput: [],
  });
  const handleInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    newUserInput[ev.target.id] = ev.target.value;
    setUserInput(newUserInput);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validation(userInput, registerSchema);
    console.log("error", { errors: error.details });
    let newUserInputErrors = {
      emailInput: [],
      passwordInput: [],
      firstnameInput: [],
      lastnameInput: [],
    };
    for (let errorItem of error.details) {
      newUserInputErrors[errorItem.path[0]] = [
        ...newUserInputErrors[errorItem.path[0]],
        errorItem.message,
      ];
    }
    setUserInputErrors(newUserInputErrors);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
          value={userInput.emailInput}
        />
        <ul className="list-group">
          {userInputErrors.emailInput.map((errorItem, idx) => (
            <li
              className="list-group-item list-group-item-danger"
              key={"emailInputError" + idx}
            >
              {errorItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          onChange={handleInputChange}
          value={userInput.passwordInput}
        />
        <ul className="list-group">
          {userInputErrors.passwordInput.map((errorItem, idx) => (
            <li
              className="list-group-item list-group-item-danger"
              key={"passwordInputError" + idx}
            >
              {errorItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <label htmlFor="firstnameInput" className="form-label">
          Firstname
        </label>
        <input
          type="text"
          className="form-control"
          id="firstnameInput"
          onChange={handleInputChange}
          value={userInput.firstnameInput}
        />
        <ul className="list-group">
          {userInputErrors.firstnameInput.map((errorItem, idx) => (
            <li
              className="list-group-item list-group-item-danger"
              key={"firstnameInputError" + idx}
            >
              {errorItem}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-3">
        <label htmlFor="lastnameInput" className="form-label">
          Lastname
        </label>
        <input
          type="text"
          className="form-control"
          id="lastnameInput"
          onChange={handleInputChange}
          value={userInput.lastnameInput}
        />
        <ul className="list-group">
          {userInputErrors.lastnameInput.map((errorItem, idx) => (
            <li
              className="list-group-item list-group-item-danger"
              key={"lastnameInputError" + idx}
            >
              {errorItem}
            </li>
          ))}
        </ul>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterPage;
