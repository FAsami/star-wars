import { gql } from "@apollo/client";
const getFilmsQuery = gql`
  {
    films {
      id
      title
      status
      producers
      director
      updatedAt
      releaseDate
      openingCrawl
      episodeId
    }
  }
`;

const getFilmFilterQuery = (orderBy, orderFrom) => {
  const filtereQuery = gql`
  {
    films(orderBy: ${orderBy}_${orderFrom}) {
      id
      title
      status
      producers
      director
      updatedAt
      releaseDate
      openingCrawl
      episodeId
    }
  }
`;
  return filtereQuery;
};
const getFilmSearchQuery = (searchTerm) => {
  const searchQuery = gql`
    {
      films(where: { _search: "${searchTerm}" }) {
        id
        title
        status
        producers
        director
        updatedAt
        releaseDate
        openingCrawl
        episodeId
      }
    }
  `;
  return searchQuery;
};
export { getFilmsQuery, getFilmFilterQuery, getFilmSearchQuery };
