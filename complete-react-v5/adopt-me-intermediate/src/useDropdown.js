import React, { useState } from "react";

const useDropdown = function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = function Dropdown() {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map(createOption)}
        </select>
      </label>
    );


    /* Functions */

    function createOption(item) {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    }
  };

  return [state, Dropdown, setState]; 
};

export default useDropdown;
