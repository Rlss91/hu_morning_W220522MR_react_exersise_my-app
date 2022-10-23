import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ReduxTKPage from "pages/ReduxTKPage";
import NavBarComponent from "components/NavBar.component";
import RegisterPage from "pages/RegisterPage";

function App() {
  return (
    <div className="container">
      <NavBarComponent />
      {/* <ReduxTKPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
