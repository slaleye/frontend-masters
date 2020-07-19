import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";

const SearchParams = function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA"); // hook
  const [breedList, setBreedList] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breedList);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  /*useEffect Hook: schedule the function to run after the renders happen*/
  // a Component can have many effects
  // Needs dependency to not run everytime
  // to run on once, have an empty array as dependency list
  useEffect(() => {
    setBreedList([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedNameList = breeds.map(({ name }) => name);
      setBreedList(breedNameList);
    }, console.error);
  }, [animal, setBreed, setBreedList]); // The order doesnt matter just a list of dependencies

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        action=""
        onSubmit={function submitForm(e) {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="aliceblue">Alice Blue</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>

          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
