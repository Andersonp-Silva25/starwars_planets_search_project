import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsPlanets from '../services/index';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const getPlanets = async () => {
    try {
      const planetsResults = await getStarWarsPlanets();
      setPlanets(planetsResults);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getFilterByName = (value) => {
    setFilterByName({ name: value });
  };

  const filterName = planets.filter((planet) => planet.name
    .toLowerCase().includes(filterByName.name.toLowerCase()));

  const contextValue = {
    getPlanets,
    getFilterByName,
    filterName,
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
