import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { getFilterByName } = useContext(StarWarsContext);
  const inputValue = ({ target: { value } }) => getFilterByName(value);

  return (
    <header>
      <h1>Header StarWars</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ inputValue }
      />
    </header>
  );
}

export default Header;
