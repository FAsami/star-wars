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
export { getPlanetsQuery };
