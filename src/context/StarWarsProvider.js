import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsPlanets from '../services/index';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    try {
      const planetsResults = await getStarWarsPlanets();
      setPlanets(planetsResults);
    } catch (e) {
      console.log(e.message);
    }
  };

  const contextValue = {
    planets,
    getPlanets,
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
