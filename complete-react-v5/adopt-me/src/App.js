import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = function AppComponent() {
/*   return React.createElement("div", { id: "app-component" }, [
    React.createElement("h1", {}, "Adopte Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Tom",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]); */

  return (
    <div id="app-component" >
      <h1>Adopt Me App!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Tom" animal="Cat" breed="Mixed" />
    </div>
  );
};

// Render the component
// By using React Dom ( what component, where to render it)
/* render(React.createElement(App), document.getElementById("root")); */
render(<App />, document.getElementById("root"));