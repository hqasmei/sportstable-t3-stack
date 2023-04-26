export const typeDefs = `#graphql

  type Game {
    id: String
    sport:String
    date:String
    comp:String
    home:String
    away:String
    score:String
    link:String
    favoritedBy: [User]
  }

  type User {
    id: String
    name:String
    email:String
    image:String
    favorites: [Game]
  }

  type Query { 
    getUserFavorites(userId: String!): User
    hello: String
  }

  type Mutation {
    toggleFavorite(userId: String!, gameId: String!): User
  }
`;

// export const typeDefs = `#graphql

//   type Query {
//     hello: String
//   }

// `;
