import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { optionsArray, valueArray } from '../utils/constants';

function FormFilterByNumericValue() {
  const [columnValue, setOptionsValue] = useState({ column: 'population' });
  const [comparationValue, setComparationValue] = useState({ comparation: 'maior que' });
  const [numericValue, setNumericValue] = useState({ value: '0' });

  const {
    getFilterNumericValue,
  } = useContext(StarWarsContext);

  const filterNumericValue = () => (
    getFilterNumericValue(
      columnValue.column,
      comparationValue.comparation,
      numericValue.value,
    )
  );

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setOptionsValue({ column: value }) }
      >
        {optionsArray.map((option, index) => (
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
