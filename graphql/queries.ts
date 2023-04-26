import { gql } from "@apollo/client";

export const GET_USER_FAVORITES = gql`
  query getUserFavorites($userId: String!) {
    getUserFavorites(userId: $userId) {
      favorites {
        id
        sport
        date
        comp
        home
        away
        score
        link
      }
    }
  }
`;
