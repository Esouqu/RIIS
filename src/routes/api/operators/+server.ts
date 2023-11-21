import prisma from "$lib/server/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const operators = await prisma.operator.findMany({
    where: {
      isObtainable: true,
    },
    select: {
      id: true,
      name: true,
      portraitUrl: true,
      rarity: true,
      class: true,
      gender: true,
      position: true,
      phases: true,
    },
    orderBy: [
      { rarity: 'desc' },
      { releaseDate: 'desc' },
    ],
  });

  return json(operators);
}