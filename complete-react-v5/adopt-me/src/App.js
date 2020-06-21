import React from 'react';
import { render } from 'react-dom';

import SearchParams from "./SearchParams";

const App = function AppComponent() {
  return (
    <div id="app-component" >
      <h1>Adopt Me App!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
