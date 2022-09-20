import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { getPlanets, planets } = useContext(StarWarsContext);

  const arrayTitle = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

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
          { planets.map((planet, index) => (
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
