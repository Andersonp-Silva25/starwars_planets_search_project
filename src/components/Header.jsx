import React, { useContext } from 'react';
import FilterByName from './FilterByName';
import FormFilterByNumericValue from './FormFilterByNumericValue';
import StarWarsContext from '../context/StarWarsContext';
import AppliedFilters from './AppliedFilters';

function Header() {
  const {
    isLoading,
  } = useContext(StarWarsContext);

  return (
    <header>
      <h1>Header StarWars</h1>
      <FilterByName />
      <br />
      { !isLoading && <FormFilterByNumericValue />}
      <br />
      <AppliedFilters />
      <br />
    </header>
  );
}

export default Header;
