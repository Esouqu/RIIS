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
          levels: {
            include: {
              range: {
                include: {
                  grid: true,
                }
              }
            },
            orderBy: {
              levelId: 'asc',
            }
          },
        },
      },
      skills: {
        include: {
          levels: {
            include: {
              range: {
                include: {
                  grid: true,
                }
              },
            },
            orderBy: {
              levelId: 'asc',
            }
          },
        },
        orderBy: {
          skillId: 'asc'
        }
      },
      phases: {
        include: {
          attributesKeyFrames: true,
          range: {
            include: {
              grid: true,
            }
          }
        },
        orderBy: {
          maxLevel: 'asc',
        }
      },
      potential: true,
      favor: true,
      summons: true,
    },
  });

  return json(operator);
}