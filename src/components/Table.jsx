import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { arrayTitle } from '../utils/constants';

function Table() {
  const { getPlanets, filterName } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            { arrayTitle.map((title, index) => (
              <th key={ title + index }>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          { filterName.map((planet, index) => (
            <tr key={ planet.name + index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
