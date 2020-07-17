import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = function AppComponent() {
  const themeHook = useState("peru");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div id="app-component">
          <header>
            <Link to="/">Adopt Me App!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
