import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsPlanets from '../services/index';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValue, setFilterByNumericValue] = useState(
    [{ column: 'population', comparation: 'maior que', value: '0' }],
  );

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
    setFilterByNumericValue([{ column, comparation, value }]));

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

  const contextValue = {
    getFilterByName,
    filterName,
    getFilterNumericValue,
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
