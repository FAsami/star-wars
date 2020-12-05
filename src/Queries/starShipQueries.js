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

const getStarShipSearchQuery = (searchTerm) => {
  const searchQuery = gql`
  {
    starships(where: { _search: "${searchTerm}" }) {
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
  return searchQuery;
};
const getStarShipFilterQuery = (orderBy, orderFrom) => {
  const filterQuery = gql`
  {
    starships(orderBy: ${orderBy}_${orderFrom}) {
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
  return filterQuery;
};
export { getStarShipQuery, getStarShipSearchQuery, getStarShipFilterQuery };
