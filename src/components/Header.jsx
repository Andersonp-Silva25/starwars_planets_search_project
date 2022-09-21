import React from 'react';
import FilterByName from './FilterByName';
import FormFilterByNumericValue from './FormFilterByNumericValue';

function Header() {
  return (
    <header>
      <h1>Header StarWars</h1>
      <FilterByName />
      <br />
      <FormFilterByNumericValue />
      <br />
    </header>
  );
}

export default Header;
