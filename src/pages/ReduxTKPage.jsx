import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { usernameActions } from "store/userName";

const ReduxTKPage = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const dispatch = useDispatch();
  const handleUsernameInputChange = (ev) => {
    setUsernameInput(ev.target.value);
  };
  const handleUpdateReduxClick = () => {
    dispatch(usernameActions.addUsername(usernameInput));
  };
  return (
    <Fragment>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="usernameFloatingInput"
          placeholder="username"
          value={usernameInput}
          onChange={handleUsernameInputChange}
        />
        <label htmlFor="usernameFloatingInput">Username</label>
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleUpdateReduxClick}
      >
        Success
      </button>
    </Fragment>
  );
};

export default ReduxTKPage;
