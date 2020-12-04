import { gql } from "@apollo/client";
const getVehiclesQuery = gql`
  {
    vehicles {
      id
      name
      model
      crew
      class
      costInCredits
      length
      passengers
      manufacturer
      cargoCapacity
      consumables
      maxAtmospheringSpeed
      pilots {
        id
        name
      }
      films {
        id
        title
      }
    }
  }
`;
export { getVehiclesQuery };
