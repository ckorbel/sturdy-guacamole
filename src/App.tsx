import React, { Fragment, useState } from "react";
import "./App.css";
import { Store } from "./Store";

const App: React.FC = (): JSX.Element => {
  const [state, dispatch] = React.useContext(Store);
  return (
    <React.Fragment>
      <h1>The Office</h1>
      <p>Pick your favorite!</p>
    </React.Fragment>
  );
};

export default App;
