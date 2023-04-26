import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // Create some games
  const match = await prisma.game.create({
    data: {
      sport: "Soccer",
      date: "2022-08-05T19:00:00Z",
      comp: "Premier League",
      home: "Crystal Palace",
      away: "Arsenal",
      score: "0-2",
      link: "U0bndsJANvk",
    },
  });
}

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
