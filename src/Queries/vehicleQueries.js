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
const getVehicleFilterQuery = (orderBy, orderFrom) => {
  const filtereQuery = gql`

  {
    vehicles(orderBy: ${orderBy}_${orderFrom}) {
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
  return filtereQuery;
};
const getVehicleSearchQuery = (searchTerm) => {
  const searchQuery = gql`
    {
      vehicles(where: { _search: "${searchTerm}" }) {
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
  return searchQuery;
};

export { getVehiclesQuery, getVehicleSearchQuery, getVehicleFilterQuery };
