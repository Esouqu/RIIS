import prisma from "$lib/server/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
  const talents = await prisma.talent.findMany({
    where: {
      operatorId: params.operatorId,
    },
    include: {
      levels: true,
    }
  });

  return json(talents);
}