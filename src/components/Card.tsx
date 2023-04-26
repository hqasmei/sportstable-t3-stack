"use client";

import React from "react";
import Image from "next/image";
import type { Game } from "@prisma/client";
import { FaHeart } from "react-icons/fa";

import { useQuery, useMutation } from "@apollo/client";
import { GET_USER_FAVORITES } from "../../graphql/queries";
import { TOGGLE_FAVORITE_GAME } from "../../graphql/mutations";

import { useSession } from "next-auth/react";

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

interface CardProps {
  gameId: string;
  comp: string;
  home: string;
  away: string;
  score: string;
  date: string;
  link: string;
}

const Card = ({ gameId, comp, home, away, score, date, link }: CardProps) => {
  const { data: sessionData } = useSession();
  const [toggleFavoriteGame] = useMutation(TOGGLE_FAVORITE_GAME);

  const userId = sessionData?.user.id;

  const {
    data: userData,
    loading,
    error,
  } = useQuery<userFavorites>(GET_USER_FAVORITES, {
    variables: { userId: userId },
    skip: !sessionData?.user.id, // skip the query if no user is logged in
    pollInterval: 100, // refetch the data every 5 milliseconds
  });

  const favoriteGames = userData?.getUserFavorites?.favorites || [];

  const isFavorite = favoriteGames.some((game: Game) => game.id === gameId);

  const [buttonText, setButtonText] = React.useState("See Score");

  const teams = home + " vs. " + away;
  const reformatedLink = "https://youtu.be/" + link;
  const reformatedDate = new Date(date).toDateString();
  const cardImage = "https://img.youtube.com/vi/" + link + "/0.jpg";

  const changeText = (text: string) => setButtonText(text);

  const toggleFavorite = async () => {
    try {
      await toggleFavoriteGame({
        variables: {
          userId: sessionData?.user?.id,
          gameId,
        },
        update: (cache) => {
          // update the cache to reflect the new favorite game status
          cache.writeQuery({
            query: GET_USER_FAVORITES,
            variables: { userId: sessionData?.user?.id },
            data: {
              user: {
                __typename: "User",
                favorites: isFavorite
                  ? favoriteGames.filter((game: Game) => game.id !== gameId)
                  : [...favoriteGames, { id: gameId }],
              },
            },
          });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="group flex flex-col items-center justify-center space-y-2   p-5 text-zinc-200 transition">
      <a href={reformatedLink} target="_blank">
        <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 z-0 bg-zinc-900"></div>
          <div className="relative z-10 flex items-center transition-all group-hover:scale-110 group-hover:transform">
            <Image src={cardImage} alt="" width={350} height={30} />
          </div>
        </div>
        <div className="mt-2 flex flex-col items-center justify-center">
          <span className="text-sm">{reformatedDate}</span>
          <span className="text-md font-semibold">{comp}</span>
          <span className="text-lg font-semibold">{teams}</span>
        </div>
      </a>
      <div className="flex flex-row space-x-3">
        <button
          onClick={() => changeText(score)}
          className="w-24 rounded-lg bg-neutral-300 p-2 font-semibold text-neutral-900 hover:bg-neutral-400"
        >
          {buttonText}
        </button>

        <button
          onClick={() => void toggleFavorite()}
          className="rounded-lg bg-neutral-300 p-2 font-semibold text-gray-600 transition-colors hover:bg-neutral-400 hover:text-red-500 "
        >
          <FaHeart size={25} color={isFavorite ? "red" : " "} />
        </button>
      </div>
    </div>
  );
};

export default Card;
