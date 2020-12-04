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
export { getPersonsQuery };
