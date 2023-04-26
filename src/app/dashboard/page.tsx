import { prisma } from "../../server/db";
import type { Game } from "@prisma/client";
import Card from "../../components/Card";

export default async function DashboardPage() {
  const data = await prisma.game.findMany({
    orderBy: {
      date: "desc", // or 'desc' for descending order
    },
  });

  return (
    <>
      <main className="max-w-screen flex min-h-screen flex-col overflow-x-hidden text-zinc-200 md:flex-row md:space-x-2">
        <div className="mx-auto min-h-full w-full flex-col space-y-12 p-5 md:-mt-16 md:space-y-12 md:p-32">
          <div className="mx-auto p-3 text-center">
            <span className="text-4xl font-bold md:text-5xl">SportsTable</span>
            <p className="pt-2 text-lg font-light text-gray-400">
              A collection of the most recent sports highlights.
            </p>
          </div>

          <div className="mx-auto space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {data.map((item: Game, idx: number) => {
                return (
                  <Card
                    key={idx}
                    gameId={item.id}
                    comp={item.comp}
                    home={item.home}
                    away={item.away}
                    score={item.score}
                    date={item.date}
                    link={item.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
