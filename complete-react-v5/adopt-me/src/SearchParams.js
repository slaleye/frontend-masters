import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA"); // hook
  const [breedList, setBreedList] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breedList);

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
      <form action="">
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
