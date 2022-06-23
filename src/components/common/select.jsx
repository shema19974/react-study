import React from "react";

const Select = ({value}) => {
  return (
    <div>
        <label>Genre</label>
    <select
      className="form-select form-select-lg"
      aria-label=".form-select-lg example"
    >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    </div>
  );
};

export default Select;
