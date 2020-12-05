import { gql } from "@apollo/client";
const getPlanetsQuery = gql`
  {
    planets {
      id
      status
      population
      climate
      orbitalPeriod
      terrain
      name
      gravity
      rotationPeriod
      surfaceWater
      diameter
      updatedAt
      residents {
        id
        name
      }
    }
  }
`;
const getPlanetFilterQuery = (orderBy, orderFrom) => {
  const filtereQuery = gql`
  {
    planets(orderBy: ${orderBy}_${orderFrom}) {
      id
      status
      population
      climate
      orbitalPeriod
      terrain
      name
      gravity
      rotationPeriod
      surfaceWater
      diameter
      updatedAt
      residents {
        id
        name
      }
    }
  }
`;
  return filtereQuery;
};
const getPlanetSearchQuery = (searchTerm) => {
  const searchQuery = gql`
    {
      planets(where: { _search: "${searchTerm}" }) {
        id
        status
        population
        climate
        orbitalPeriod
        terrain
        name
        gravity
        rotationPeriod
        surfaceWater
        diameter
        updatedAt
        residents {
          id
          name
        }
      }
    }
  `;
  return searchQuery;
};
export { getPlanetsQuery, getPlanetSearchQuery, getPlanetFilterQuery };
