"use client";

import type { Game } from "@prisma/client";
import { GET_USER_FAVORITES } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import Card from "../../components/Card";

interface userFavorites {
  getUserFavorites: {
    favorites: {
      id: string;
      sport: string;
      date: string;
      comp: string;
      home: string;
      away: string;
      score: string;
      link: string;
    }[];
  };
}


interface FavoriteProps {
  id: string;
  comp: string;
  home: string;
  away: string;
  score: string;
  date: string;
  link: string;
}
export default function FavoritesPage() {
  const { data: sessionData } = useSession();
  const userId = sessionData?.user.id;

  const {
    data: userData,
    loading,
    error,
  } = useQuery<userFavorites>(GET_USER_FAVORITES, {
    variables: { userId: userId },
    skip: !sessionData?.user.id, // skip the query if no user is logged in
  });

  const favoriteGames = userData?.getUserFavorites?.favorites || [];
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <main className="max-w-screen flex min-h-screen flex-col overflow-x-hidden text-zinc-200 md:flex-row md:space-x-2">
      <div className="mx-auto min-h-full w-full flex-col space-y-12 p-5 md:-mt-16 md:space-y-12 md:p-32">
        <div className="mx-auto p-3">
          <span className="text-left text-4xl font-bold md:text-5xl">
            Your Favorites
          </span>
        </div>
        {favoriteGames.length > 0 ? (
          <div className="mx-auto space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {userData?.getUserFavorites?.favorites.map(
                (favorite: FavoriteProps, idx: number) => {
                  return (
                    <Card
                      key={idx}
                      gameId={favorite.id}
                      comp={favorite.comp}
                      home={favorite.home}
                      away={favorite.away}
                      score={favorite.score}
                      date={favorite.date}
                      link={favorite.link}
                    />
                  );
                }
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl">
            No favorites have been made yet.
          </div>
        )}
      </div>
    </main>
  );
}
