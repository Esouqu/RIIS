import prisma from "$lib/server/prisma";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
  const operator = await prisma.operator.findUnique({
    where: {
      id: params.operatorId,
    },
    include: {
      artList: true,
      talents: {
        include: {
          levels: true,
          range: true,
        }
      },
      skills: {
        include: {
          levels: {
            include: {
              range: true
            },
          },
        },
        orderBy: {
          skillId: 'asc'
        }
      },
      summons: true,
    },
  });

  return json(operator);
}