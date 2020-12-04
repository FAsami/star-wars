import { gql } from "@apollo/client";
const getStarShipQuery = gql`
  {
    starships {
      id
      name
      costInCredits
      hyperdriveRating
      passengers
      cargoCapacity
      crew
      length
      manufacturer
      maxAtmospheringSpeed
      mglt
      consumables
      class
      films {
        id
        title
      }
      pilots {
        id
        name
      }
    }
  }
`;
export { getStarShipQuery };
