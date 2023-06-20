import { PrismaClient } from "@prisma/client";
// import eventData from "../src/lib/event_data.json" assert { type: "json" }

const prisma = new PrismaClient();

// async function processEvents() {
//   for (const p of eventData.events) {
//     const user = await prisma.eventPost.create({
//       data: {
//         type: p.keyword,
//         title: p.title,
//         imageUrl: p.image,
//         startTime: p.startDate,
//         endTime: p.endDate,
//       }
//     })
//     console.log(`Created event with id: ${user.id}`)
//   }
// }

function replaceTextDescriptionValues(text: string | null, blackboard: Array<{ key: string, value: number }>) {
  if (!text) return ""

  const textWithReplacedTags = text.split(/(\{[^}]*\})/);

  return textWithReplacedTags.map((sentence) => {
    const objToReplace = blackboard.find((item) => {
      return sentence.match(/\{[^}]*\}/g) ? sentence.toLowerCase().includes(item.key) : undefined
    });

    if (!objToReplace) return sentence

    if (sentence.includes('0%')) {
      return new Intl.NumberFormat('default', { style: 'percent' }).format(objToReplace.value);
    } else {
      return objToReplace.value
    }
  }).join('');
}
function parseActivationType(typeNumber: number): string {
  switch (typeNumber) {
    case 0:
      return 'Passive'
    case 1:
      return 'Manual'
    case 2:
      return 'Auto'
    default: {
      return ''
    }
  }
}
function parseChargeType(typeNumber: number): string {
  switch (typeNumber) {
    case 1:
      return 'Per Second Recovery'
    case 2:
      return 'Offensive Recovery'
    case 4:
      return 'Defensive Recovery'
    default: {
      return ''
    }
  }
}

interface ISkillEntry {
  id: string,
  info: {
    levels: Array<{
      name: string,
      rangeId: string | null,
      description: string | null,
      skillType: number,
      spData: {
        spType: number,
        spCost: number,
        initSp: number,
      },
      duration: number,
      blackboard: Array<{
        key: string,
        value: number,
      }>
    }>,
  }
}
interface ITags {
  termDescriptionDict: {
    [key: string]: {
      termId: string,
      termName: string,
      description: string,
    }
  }
}
interface IRange {
  [key: string]: {
    id: string,
    grids: Array<{
      row: number,
      col: number,
    }>
  }
}

async function processRange() {
  const res3 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/range_table.json');
  const rangeTable: IRange = await res3.json();
  const rangeTableEntries = Object.entries(rangeTable).map((entry) => {
    return {
      id: entry[0],
      info: entry[1],
    }
  })

  for (const r of rangeTableEntries) {
    const isExisted = await prisma.range.findUnique({
      where: {
        id: r.id
      },
    })

    let range;

    if (!isExisted) {
      range = await prisma.range.create({
        data: {
          name: r.id,
          grid: {
            create: r.info.grids
          },
        },
      })

      console.log(`Created range with name: ${range.name}`)
    } else {
      console.log(`${range.name} is already exists`)
    }
  }
}

async function processSkills() {
  const res = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/skill_table.json');
  const skills = await res.json();
  const skillsEntries = Object.entries(skills).map((entry) => {
    return {
      id: entry[0],
      info: entry[1],
    } as ISkillEntry;
  });

  // const res2 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/gamedata_const.json');
  // const skillTextTags: ITags = await res2.json();

  // const res3 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/range_table.json');
  // const rangeTable: IRange = await res3.json();
  // const rangeTableEntries = Object.entries(rangeTable).map((entry) => {
  //   return {
  //     id: entry[0],
  //     info: entry[1],
  //   }
  // })

  for (let i = 0; i < skillsEntries.length; i++) {
    const entry = skillsEntries[i];

    const isExisted = await prisma.skill.findUnique({
      where: {
        id: entry.id
      }
    })

    let skill;

    if (isExisted) {
      skill = await prisma.skill.update({
        where: {
          id: entry.id,
        },
        data: {
          // id: entry.id,
          skillId: entry.id.includes('skcom') || entry.id.includes('sktok') ? 0 : parseInt(entry.id.replace(/.+_/g, '')),
          // name: entry.info.levels[0].name,
          // activationType: parseActivationType(entry.info.levels[0].skillType),
          // chargeType: parseChargeType(entry.info.levels[0].spData.spType),
          // iconUrl: `https://raw.githubusercontent.com/Aceship/Arknight-Images/main/skills/skill_icon_${entry.id}.png`,
          levels: {
            create: entry.info.levels.map((level, idx) => {
              return {
                levelId: idx,
                spCost: level.spData.spCost,
                initSp: level.spData.initSp,
                description: replaceTextDescriptionValues(level.description, level.blackboard),
                duration: `${Math.round(level.duration)} seconds`,
                range: level.rangeId ? {
                  connect: {
                    name: level.rangeId,
                  }
                } : undefined,
              }
            })
          },
        },
      });

      // console.log(`Created skill with id: ${skill.id}`);
      console.log(`${skill.id} updated`);
    } else {
      // console.log(`${isExisted?.id} is already exists`);
      console.log(`No such id: ${skill.id}`);
    }
  }
}

interface IOperatorEntry {
  id: string,
  info: {
    name: string,
    description: string,
    displayNumber: string,
    isNotObtainable: boolean,
    profession: string,
    subProfessionId: string,
    nationId: string,
    groupId: string,
    teamId: string,
    position: string,
    tagList: Array<string>,
    rarity: number,
    itemObtainApproach: string,
    skills: Array<{
      skillId: string,
    }>,
    talents: Array<{
      candidates: Array<{
        unlockCondition: {
          phase: number,
          level: number,
        },
        requiredPotentialRank: number,
        name: string,
        description: string,
        rangeId: string,
      }>
    }>,
    trait: {
      candidates: Array<{
        blackboard: Array<{
          key: string,
          value: number,
        }>
      }>
    },
    phases: Array<{
      rangeId: string,
      maxLevel: number,
      attributesKeyFrames: Array<{
        level: number,
        data: {
          maxHp: number,
          atk: number,
          def: number,
          magicResistance: number,
          cost: number,
          blockCnt: number,
          baseAttackTime: number,
          respawnTime: number,
        }
      }>
    }>
  }
}

// interface ISkinsEntry {
//   id: string,
//   info: {
//     portraitId: string,
//     displaySkin: {
//       skinGroupId: string,
//     }
//   }
// }

// interface IStory {
//   handbookDict: {
//     [key: string]: {
//       drawName: string,
//       storyTextAudio: Array<{
//         stories: Array<{
//           storyText: string,
//         }>,
//       }>
//     }
//   }
// }

async function processOperators() {
  const res = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/character_table.json');
  const operators = await res.json();
  const operatorsEntries = Object.entries(operators).map((entry) => {
    return {
      id: entry[0],
      info: entry[1],
    } as IOperatorEntry;
  });

  // const res2 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/handbook_info_table.json');
  // const story: IStory = await res2.json();
  // const artist = (id: string) => story.handbookDict[id]?.drawName;
  // const gender = (id: string) => story.handbookDict[id]?.storyTextAudio[0].stories[0].storyText.split('\n').filter((item) => item.includes('Gender')).join('').replace(/\[[^\]]*\]/, '').trim();

  // const res3 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/skin_table.json');
  // const skins = await res3.json();
  // const skinsEntries = Object.entries(skins.charSkins).map((entry) => {
  //   return {
  //     id: entry[0],
  //     info: entry[1],
  //   } as ISkinsEntry;
  // });

  for (const p of operatorsEntries) {
    if (p.id.includes('token') || p.id.includes('trap')) {
      console.log(`${p.id} is skipped`);
      continue
    }

    // const skinsList = skinsEntries.filter((skin) => skin.id.includes(p.id))
    //   .map((skin) => {
    //     const changedId = skin.info.portraitId.replace(/#/, '%23');

    //     return {
    //       name: changedId.includes('%23') ? 'Shop' : skin.info.displaySkin.skinGroupId.replace('ILLUST_', ''),
    //       portrait: `https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars/${changedId}.png`,
    //       full: `https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/${changedId}.png`,
    //     }
    //   });

    const isExisted = await prisma.operator.findUnique({
      where: {
        id: p.id
      }
    })

    let operator;

    if (isExisted) {
      operator = await prisma.operator.update({
        where: {
          id: p.id,
        },
        data: {
          // id: p.id,
          // name: p.info.name,
          // displayNumber: p.info.displayNumber,
          // class: p.info.profession,
          // subClass: p.info.subProfessionId,
          // position: p.info.position,
          // rarity: p.info.rarity,
          // group: p.info.groupId !== null ? p.info.groupId : undefined,
          // nation: p.info.nationId !== null ? p.info.nationId : undefined,
          // team: p.info.teamId !== null ? p.info.teamId : undefined,
          // isObtainable: !p.info.isNotObtainable,
          // obtainApproach: p.info.itemObtainApproach,
          // tagList: p.info.tagList !== null ? p.info.tagList : [],
          // gender: gender(p.id),
          trait: p.info.trait ? replaceTextDescriptionValues(p.info.description, p.info.trait.candidates[p.info.trait.candidates.length - 1].blackboard) : p.info.description,
          phases: {
            create: p.info.phases.map((phase) => {
              return {
                id: p.id,
                range: {
                  connect: {
                    name: phase.rangeId,
                  }
                },
                maxLevel: phase.maxLevel,
                attributesKeyFrames: {
                  create: phase.attributesKeyFrames.map((keyFrame) => {
                    return {
                      maxHp: keyFrame.data.maxHp,
                      atk: keyFrame.data.atk,
                      def: keyFrame.data.def,
                      magicResistance: keyFrame.data.magicResistance,
                      cost: keyFrame.data.cost,
                      blockCount: keyFrame.data.blockCnt,
                      baseAttackTime: keyFrame.data.baseAttackTime,
                      respawnTime: keyFrame.data.respawnTime,
                    }
                  })
                }
              }
            })
          },
          // talents: {
          //   create: p.info.talents !== null ? p.info.talents.map((talent) => {
          //     return {
          //       name: talent.candidates[0].name,
          //       levels: {
          //         create: talent.candidates.map((cand, idx) => {
          //           return {
          //             levelId: idx,
          //             description: cand.description,
          //             phase: cand.unlockCondition.phase,
          //             level: cand.unlockCondition.level,
          //             potential: cand.requiredPotentialRank,
          //             rangeId: cand.rangeId !== null ? cand.rangeId : undefined,
          //           }
          //         })
          //       }
          //     }
          //   }) : [],
          // },
          // skills: {
          //   connect: p.info.skills.map((skill) => {
          //     return {
          //       id: skill.skillId
          //     };
          //   }),
          // },
          // // summons: undefined,
          // // artist: artist(p.id),
          // artList: {
          //   create: skinsList,
          // },
          // portraitUrl: `https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars/${p.id}.png`,
          // va: "",
        },
      });

      // console.log(`Created operator with id: ${operator.id}`);
      console.log(`${operator.id} updated`);
    } else {
      // console.log(`${isExisted?.id} is already exists`);
      console.log(`No such id: ${operator.id}`);
    }
  }
}

async function main() {
  console.log(`Start seeding ...`)

  // await processEvents();
  // await processRange();
  // await processSkills();
  await processOperators();

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })