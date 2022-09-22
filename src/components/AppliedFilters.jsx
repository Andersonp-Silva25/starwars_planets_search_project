import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function AppliedFilters() {
  const {
    filterByNumericValue,
    getDeleteOneFilter,
    getDeleteAllFilters,
  } = useContext(StarWarsContext);

  const deleteOneFilter = (position) => {
    getDeleteOneFilter(position);
  };

  const deleteAllFilters = () => {
    getDeleteAllFilters();
  };

  return (
    <div>
      {filterByNumericValue.map(({ column, comparation, value }, index) => (
        <div key={ column + index } data-testid="filter">
          <span>{column}</span>
          {' '}
          <span>{comparation}</span>
          {' '}
          <span>{value}</span>
          {' '}
          <button
            type="button"
            onClick={ () => deleteOneFilter(index) }
          >
            X
          </button>
        </div>
      ))}
      <br />
      {filterByNumericValue.length > 0
        ? (
          <button
            type="button"
            data-testid="button-remove-filters"
            onClick={ deleteAllFilters }
          >
            Limpar tudo
          </button>
        )
        : <span />}
    </div>
  );
}

export default AppliedFilters;
