const API_URL = 'https://swapi.dev/api/planets';

export default async function getStarWarsPlanets() {
  const response = await fetch(API_URL);
  const { results } = await response.json();
  const filterResidents = results.filter((result) => delete result.residents);
  return filterResidents;
}
