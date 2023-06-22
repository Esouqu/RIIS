import prisma from "$lib/server/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const operators = await prisma.operator.findMany({
    where: {
      OR: [
        { obtainApproach: 'Recruitment' },
        { obtainApproach: 'Recruitment & Headhunting' },
      ]
    },
    orderBy: [
      { rarity: 'desc' },
      { releaseDate: 'desc' },
    ]
  });

  return json(operators);
}