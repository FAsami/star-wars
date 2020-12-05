import { gql } from "@apollo/client";
const getPersonsQuery = gql`
  {
    persons {
      name
      height
      birthYear
      mass
      skinColor
      gender
      eyeColor
      hairColor
      homeworld {
        id
        name
      }
    }
  }
`;
const getPersonSearchQuery = (searchTerm) => {
  const searchQuery = gql`
    {
      persons(where: { _search: "${searchTerm}" }) {
        name
        height
        birthYear
        mass
        skinColor
        gender
        eyeColor
        hairColor
        homeworld {
          id
          name
        }
      }
    }
  `;
  return searchQuery;
};

const getPersonFilterQuery = (orderBy, orderFrom) => {
  const filtereQuery = gql`
  {
    persons(orderBy: ${orderBy}_${orderFrom}) {
      name
      height
      birthYear
      mass
      skinColor
      gender
      eyeColor
      hairColor
      homeworld {
        id
        name
      }
    }
  }
`;
  return filtereQuery;
};

export { getPersonsQuery, getPersonSearchQuery, getPersonFilterQuery };
