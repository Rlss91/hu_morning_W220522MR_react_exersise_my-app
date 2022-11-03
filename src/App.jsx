import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ReduxTKPage from "pages/ReduxTKPage";
import NavBarComponent from "components/NavBar.component";
import RegisterPage from "pages/RegisterPage";
import BsBtnComponent, { bsBtnOptions } from "components/BsBtn.component";
import CarsPanelPage from "pages/CarsPanel.page";

function App() {
  return (
    <div className="container">
      <NavBarComponent />
      {/* <ReduxTKPage /> */}
      <RegisterPage />
      {/* <CarsPanelPage /> */}
      {/* <BsBtnComponent color={bsBtnOptions.danger}>click me</BsBtnComponent> */}
    </div>
  );
}

export default App;
