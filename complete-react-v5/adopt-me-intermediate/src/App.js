import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

//import SearchParams from "./SearchParams";
//import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

// Dynamic import a JS thing
const Details = lazy(() => import("./Details")); // Will not be laoded until asked to be rendered
const SearchParams = lazy(() => import("./SearchParams"));
const App = function AppComponent() {
  const themeHook = useState("peru");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div id="app-component">
          <NavBar />
          <Suspense fallback={<h1> loading route</h1>}>
            <Router >
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
