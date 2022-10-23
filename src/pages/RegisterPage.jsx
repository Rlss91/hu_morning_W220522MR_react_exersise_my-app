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
  const handleInputChange = (ev) => {
    let newUserInput = JSON.parse(JSON.stringify(userInput));
    newUserInput[ev.target.id] = ev.target.value;
    setUserInput(newUserInput);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { error } = validation(userInput, registerSchema);
    console.log("error", error);
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
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
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
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterPage;
