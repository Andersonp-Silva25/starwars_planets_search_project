import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsPlanets from '../services/index';
import { optionsArray } from '../utils/constants';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValue, setFilterByNumericValue] = useState(
    [],
  );
  const [filterOptionsColumn, setFilterOptionsColumn] = useState(optionsArray);
  const [isLoading, setIsLoading] = useState(false);

  const getPlanets = async () => {
    try {
      const planetsResults = await getStarWarsPlanets();
      setPlanets(planetsResults);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const getFilterByName = (value) => {
    setFilterByName({ name: value });
  };

  const getFilterNumericValue = (column, comparation, value) => (
    setFilterByNumericValue(
      (prevState) => [...prevState, { column, comparation, value }],
    ));

  let filterName = planets.filter((planet) => planet.name
    .toLowerCase().includes(filterByName.name.toLowerCase()));

  filterByNumericValue.forEach((numericValues) => {
    filterName = filterName.filter((planet) => {
      if (numericValues.comparation === 'maior que') {
        return Number(planet[numericValues.column]) > Number(numericValues.value);
      }
      if (numericValues.comparation === 'menor que') {
        return Number(planet[numericValues.column]) < Number(numericValues.value);
      }
      return Number(planet[numericValues.column]) === Number(numericValues.value);
    });
  });

  useEffect(() => {
    filterByNumericValue.forEach((element) => {
      const newOption = filterOptionsColumn.filter((option) => option !== element.column);
      setFilterOptionsColumn(newOption);
      console.log(newOption);
    });
    setIsLoading(false);
  }, [filterByNumericValue]);

  const contextValue = {
    getFilterByName,
    filterName,
    getFilterNumericValue,
    filterOptionsColumn,
    isLoading,
    setIsLoading,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
