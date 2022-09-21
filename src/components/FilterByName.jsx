import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByName() {
  const {
    getFilterByName,
  } = useContext(StarWarsContext);

  const inputNameValue = ({ target: { value } }) => getFilterByName(value);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ inputNameValue }
      />
    </div>
  );
}

export default FilterByName;
