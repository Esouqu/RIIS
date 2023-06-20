import prisma from "$lib/server/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
  const skills = await prisma.skill.findMany({
    where: {
      operators: {
        some: {
          id: params.operatorId,
        }
      },
    },
    include: {
      levels: {
        orderBy: {
          levelId: 'asc',
        },
        include: {
          range: true,
        }
      },
    }
  });

  return json(skills);
}