import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { valueArray } from '../utils/constants';

function FormFilterByNumericValue() {
  const {
    getFilterNumericValue,
    filterOptionsColumn,
    setIsLoading,
  } = useContext(StarWarsContext);

  const [columnValue, setOptionsValue] = useState({ column: filterOptionsColumn[0] });
  const [comparationValue, setComparationValue] = useState({ comparation: 'maior que' });
  const [numericValue, setNumericValue] = useState({ value: '0' });

  const filterNumericValue = () => {
    setIsLoading(true);
    getFilterNumericValue(
      columnValue.column,
      comparationValue.comparation,
      numericValue.value,
    );
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setOptionsValue({ column: value }) }
      >
        {filterOptionsColumn.map((option, index) => (
          <option key={ option + index }>{option}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => (
          setComparationValue({ comparation: value })
        ) }
      >
        {valueArray.map((option, index) => (
          <option key={ option + index }>{option}</option>
        ))}
      </select>

      <input
        type="text"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => (
          setNumericValue({ value })
        ) }
        value={ numericValue.value }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumericValue }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FormFilterByNumericValue;
