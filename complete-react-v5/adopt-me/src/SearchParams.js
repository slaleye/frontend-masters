import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';

const SearchParams = function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA"); // hook
  const [breedList, setBreedList] = useState([]);
  const [animal , AnimalDropdown] = useDropdown("Animal","dog", ANIMALS);
  const [breed , BreedDropdown] = useDropdown("Breed","", breedList);

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
            onChange={e => setLocation(e.target.value)}
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
