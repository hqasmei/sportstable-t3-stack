import { Context } from "../src/pages/api/graphql";

export const resolvers = {
  Query: {
    hello: () => "world",

    // Get favorites by user ID
    getUserFavorites: async (
      _parent: any,
      { userId }: any,
      context: Context
    ) => {
      return await context.prisma.user.findFirst({
        where: {
          id: userId,
        },
        select: {
          favorites: true,
        },
      });
    },
  },
  Mutation: {
    // Toggle game favorite status for user
    toggleFavorite: async (
      _parent: any,
      { userId, gameId }: any,
      context: Context
    ) => {
      const user = await context.prisma.user.findFirst({
        where: {
          id: userId,
        },
        select: {
          favorites: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const gameIndex = user.favorites.findIndex((game) => game.id === gameId);

      if (gameIndex !== -1) {
        // Game is already a favorite, so remove it
        return await context.prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            favorites: {
              disconnect: {
                id: gameId,
              },
            },
          },
        });
      } else {
        // Game is not yet a favorite, so add it
        return await context.prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            favorites: {
              connect: {
                id: gameId,
              },
            },
          },
        });
      }
    },
  },
};
