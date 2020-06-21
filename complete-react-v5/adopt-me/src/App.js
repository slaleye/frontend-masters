const Pet = function PetComponent({name, animal, breed }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = function AppComponent() {
  return React.createElement("div", { id: "app-component" }, [
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
  ]);
};

// Render the component
// By using React Dom ( what component, where to render it)
ReactDOM.render(React.createElement(App), document.getElementById("root"));
