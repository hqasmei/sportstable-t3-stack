import { gql } from "@apollo/client";

export const TOGGLE_FAVORITE_GAME = gql`
  mutation toggleFavorite($userId: String!, $gameId: String!) {
    toggleFavorite(userId: $userId, gameId: $gameId) {
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
