import { PrismaClient } from "@prisma/client";

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

// const operatorsArray: Array<Element> = [...document.querySelectorAll('.operators-row')];
// const getMethod = operatorsArray.map((operator) => {
//   const name = operator.querySelector('.operator-cell > .operator-title > .operator-title-actual').textContent;
//   const obtainMethodSections = operator.querySelectorAll('.obtain-method-section')
//   const obtainMethod = obtainMethodSections[0].querySelector('.obtain-title').textContent;
//   const globalReleaseDate = obtainMethodSections[1].querySelectorAll('div')[1] && obtainMethodSections[1].querySelectorAll('div')[1].textContent.replace(/[A-Za-z]+:\s+/g, '');
//   const cnReleaseDate = obtainMethodSections[1].querySelectorAll('div')[0] && obtainMethodSections[1].querySelectorAll('div')[0].textContent.replace(/[A-Za-z]+:\s+/g, '');

//   return {
//       name: name,
//       obtainMethod: obtainMethod,
//       globalReleaseDate: globalReleaseDate,
//       cnReleaseDate: cnReleaseDate,
//   }
// })

const operatorsObtainMethod = [
  {
    "name": "Executor the Ex Foedere",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-06-08"
  },
  {
    "name": "Spuria",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-06-08"
  },
  {
    "name": "Insider",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-06-08"
  },
  {
    "name": "Tulip",
    "obtainMethod": ""
  },
  {
    "name": "Friston-3",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-05-22"
  },
  {
    "name": "U-Official",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-04-01"
  },
  {
    "name": "Muelsyse",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-05-01"
  },
  {
    "name": "Ho'olheyak",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-05-01"
  },
  {
    "name": "Melanite",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-05-01"
  },
  {
    "name": "Silence the Paradigmatic",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-05-01"
  },
  {
    "name": "Ines",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-04-06"
  },
  {
    "name": "Cement",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-04-06"
  },
  {
    "name": "Humus",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-04-06"
  },
  {
    "name": "Morgan",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-04-06"
  },
  {
    "name": "Kirin X Yato",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-03-07"
  },
  {
    "name": "Rathalos S Noir Corne",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-03-07"
  },
  {
    "name": "Terra Research Commission",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-03-07"
  },
  {
    "name": "Qiubai",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-02-14"
  },
  {
    "name": "Wind Chimes",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-02-14"
  },
  {
    "name": "Firewhistle",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-01-17"
  },
  {
    "name": "Jieyun",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2023-01-17"
  },
  {
    "name": "Chongyue",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-01-17"
  },
  {
    "name": "Lin",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2023-01-17"
  },
  {
    "name": "Reed The Flame Shadow",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2022-12-15"
  },
  {
    "name": "Harmonie",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2022-12-15"
  },
  {
    "name": "Puzzle",
    "obtainMethod": "Activity Acquisition",
    "cnReleaseDate": "2022-12-15"
  },
  {
    "name": "Quartz",
    "obtainMethod": "Voucher Exchange",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-11-01"
  },
  {
    "name": "Qanipalaat",
    "obtainMethod": "Voucher Exchange",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-11-01"
  },
  {
    "name": "Lunacub",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-11-01"
  },
  {
    "name": "Vigil",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-11-01"
  },
  {
    "name": "Penance",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-11-01"
  },
  {
    "name": "Texas the Omertosa",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-11-01"
  },
  {
    "name": "Stainless",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-04-27",
    "cnReleaseDate": "2022-10-11"
  },
  {
    "name": "Paprika",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-04-27",
    "cnReleaseDate": "2022-10-11"
  },
  {
    "name": "Totter",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-04-27",
    "cnReleaseDate": "2022-10-11"
  },
  {
    "name": "Dagda",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2023-04-27",
    "cnReleaseDate": "2022-10-11"
  },
  {
    "name": "Luo Xiaohei",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2023-04-07",
    "cnReleaseDate": "2022-09-15"
  },
  {
    "name": "Highmore",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2023-05-23",
    "cnReleaseDate": "2022-09-27"
  },
  {
    "name": "Młynar",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-03-31",
    "cnReleaseDate": "2022-09-08"
  },
  {
    "name": "Proviso",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-03-31",
    "cnReleaseDate": "2022-09-08"
  },
  {
    "name": "Cantabile",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-01-13",
    "cnReleaseDate": "2022-08-11"
  },
  {
    "name": "Minimalist",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2023-01-13",
    "cnReleaseDate": "2022-08-11"
  },
  {
    "name": "Pozëmka",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-01-13",
    "cnReleaseDate": "2022-08-11"
  },
  {
    "name": "Gavial the Invincible",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-01-13",
    "cnReleaseDate": "2022-08-11"
  },
  {
    "name": "Dorothy",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-03-14",
    "cnReleaseDate": "2022-07-05"
  },
  {
    "name": "Greyy the Lightningbearer",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2023-03-14",
    "cnReleaseDate": "2022-06-05"
  },
  {
    "name": "Astgenne",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2023-03-14",
    "cnReleaseDate": "2022-07-05"
  },
  {
    "name": "Ebenholz",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-12-27",
    "cnReleaseDate": "2022-06-09"
  },
  {
    "name": "Hibiscus the Purifier",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-12-27",
    "cnReleaseDate": "2022-06-09"
  },
  {
    "name": "Czerny",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-12-27",
    "cnReleaseDate": "2022-06-09"
  },
  {
    "name": "Erato",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-12-08",
    "cnReleaseDate": "2022-05-19"
  },
  {
    "name": "Windflit",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-11-03",
    "cnReleaseDate": "2022-05-01"
  },
  {
    "name": "Lumen",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-11-03",
    "cnReleaseDate": "2022-05-01"
  },
  {
    "name": "Irene",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-11-03",
    "cnReleaseDate": "2022-05-01"
  },
  {
    "name": "Specter the Unchained",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-11-03",
    "cnReleaseDate": "2022-05-01"
  },
  {
    "name": "Horn",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-10-19",
    "cnReleaseDate": "2022-04-14"
  },
  {
    "name": "Rockrock",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-10-19",
    "cnReleaseDate": "2022-04-14"
  },
  {
    "name": "Chestnut",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-10-19",
    "cnReleaseDate": "2022-04-14"
  },
  {
    "name": "Heidi",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-10-19",
    "cnReleaseDate": "2022-04-14"
  },
  {
    "name": "Kazemaru",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-09-16",
    "cnReleaseDate": "2022-03-15"
  },
  {
    "name": "Fiammetta",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-09-16",
    "cnReleaseDate": "2022-03-15"
  },
  {
    "name": "Enforcer",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-09-16",
    "cnReleaseDate": "2022-03-15"
  },
  {
    "name": "Quercus",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-08-18",
    "cnReleaseDate": "2022-02-15"
  },
  {
    "name": "Goldenglow",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-08-18",
    "cnReleaseDate": "2022-02-15"
  },
  {
    "name": "Kroos the Keen Glint",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-07-29",
    "cnReleaseDate": "2022-01-25"
  },
  {
    "name": "Blacknight",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-07-29",
    "cnReleaseDate": "2022-01-25"
  },
  {
    "name": "Lee",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-07-29",
    "cnReleaseDate": "2022-01-25"
  },
  {
    "name": "Ling",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-07-29",
    "cnReleaseDate": "2022-01-25"
  },
  {
    "name": "Shalem",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-07-14",
    "cnReleaseDate": "2022-01-05"
  },
  {
    "name": "Gnosis",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-06-30",
    "cnReleaseDate": "2021-12-21"
  },
  {
    "name": "Aurora",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-06-30",
    "cnReleaseDate": "2021-12-21"
  },
  {
    "name": "Kjera",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-06-30",
    "cnReleaseDate": "2021-12-21"
  },
  {
    "name": "Nine-Colored Deer",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-07-14",
    "cnReleaseDate": "2022-01-10"
  },
  {
    "name": "Honeyberry",
    "obtainMethod": "Voucher Exchange",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "Pudding",
    "obtainMethod": "Voucher Exchange",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "'Justice Knight'",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "Wild Mane",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "Corroserum",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "Flametail",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "Nearl the Radiant Knight",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-04-28",
    "cnReleaseDate": "2021-11-01"
  },
  {
    "name": "Fartooth",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-04-14",
    "cnReleaseDate": "2021-10-15"
  },
  {
    "name": "Ashlock",
    "obtainMethod": "Headhunting",
    "cnReleaseDate": "2021-10-15"
  },
  {
    "name": "Saileach",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-03-17",
    "cnReleaseDate": "2021-09-17"
  },
  {
    "name": "Mulberry",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-03-17",
    "cnReleaseDate": "2021-09-17"
  },
  {
    "name": "Roberta",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-03-17",
    "cnReleaseDate": "2021-09-17"
  },
  {
    "name": "Tequila",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2022-01-14",
    "cnReleaseDate": "2021-08-03"
  },
  {
    "name": "La Pluma",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-01-14",
    "cnReleaseDate": "2021-08-03"
  },
  {
    "name": "Mizuki",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-01-14",
    "cnReleaseDate": "2021-08-03"
  },
  {
    "name": "Ch'en the Holungday",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2022-01-14",
    "cnReleaseDate": "2021-08-03"
  },
  {
    "name": "Pallas",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-12-29",
    "cnReleaseDate": "2021-07-02"
  },
  {
    "name": "Carnelian",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-12-09",
    "cnReleaseDate": "2021-06-01"
  },
  {
    "name": "Kirara",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-12-09",
    "cnReleaseDate": "2021-06-01"
  },
  {
    "name": "Bena",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-12-09",
    "cnReleaseDate": "2021-06-01"
  },
  {
    "name": "Indigo",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-12-09",
    "cnReleaseDate": "2021-06-01"
  },
  {
    "name": "Skadi the Corrupting Heart",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-10-21",
    "cnReleaseDate": "2021-05-01"
  },
  {
    "name": "Kal'tsit",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-10-21",
    "cnReleaseDate": "2021-05-01"
  },
  {
    "name": "Gladiia",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-10-21",
    "cnReleaseDate": "2021-05-01"
  },
  {
    "name": "Akafuyu",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-10-21",
    "cnReleaseDate": "2021-05-01"
  },
  {
    "name": "Passenger",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-09-30",
    "cnReleaseDate": "2021-04-15"
  },
  {
    "name": "Toddifons",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-09-30",
    "cnReleaseDate": "2021-04-15"
  },
  {
    "name": "Heavyrain",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-09-30",
    "cnReleaseDate": "2021-04-15"
  },
  {
    "name": "Ash",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-08-18",
    "cnReleaseDate": "2021-03-09"
  },
  {
    "name": "Frost",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-08-18",
    "cnReleaseDate": "2021-03-09"
  },
  {
    "name": "Blitz",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-08-18",
    "cnReleaseDate": "2021-03-09"
  },
  {
    "name": "Tachanka",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-08-18",
    "cnReleaseDate": "2021-03-09"
  },
  {
    "name": "Dusk",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-07-30",
    "cnReleaseDate": "2021-02-05"
  },
  {
    "name": "Saga",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-07-30",
    "cnReleaseDate": "2021-02-05"
  },
  {
    "name": "Mr. Nothing",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-07-30",
    "cnReleaseDate": "2021-02-05"
  },
  {
    "name": "Lava the Purgatory",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-07-30",
    "cnReleaseDate": "2021-02-05"
  },
  {
    "name": "Tuye",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-07-13",
    "cnReleaseDate": "2021-01-19"
  },
  {
    "name": "Archetto",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-07-06",
    "cnReleaseDate": "2021-01-05"
  },
  {
    "name": "Iris",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-07-06",
    "cnReleaseDate": "2021-01-05"
  },
  {
    "name": "Beanstalk",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-07-06",
    "cnReleaseDate": "2021-01-05"
  },
  {
    "name": "Mountain",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-06-22",
    "cnReleaseDate": "2020-12-17"
  },
  {
    "name": "Robin",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2021-06-22",
    "cnReleaseDate": "2020-12-17"
  },
  {
    "name": "Kafka",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-06-22",
    "cnReleaseDate": "2020-12-17"
  },
  {
    "name": "Pinecone",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-06-22",
    "cnReleaseDate": "2020-12-17"
  },
  {
    "name": "Jackie",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-30",
    "cnReleaseDate": "2020-11-01"
  },
  {
    "name": "Amiya (Guard)",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-04-30",
    "cnReleaseDate": "2020-11-01"
  },
  {
    "name": "Whisperain",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-30",
    "cnReleaseDate": "2020-11-01"
  },
  {
    "name": "Mudrock",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-30",
    "cnReleaseDate": "2020-11-01"
  },
  {
    "name": "Rosmontis",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-30",
    "cnReleaseDate": "2020-11-01"
  },
  {
    "name": "Blemishine",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-08",
    "cnReleaseDate": "2020-10-15"
  },
  {
    "name": "Aosta",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-08",
    "cnReleaseDate": "2020-10-15"
  },
  {
    "name": "Whislash",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-04-08",
    "cnReleaseDate": "2020-10-15"
  },
  {
    "name": "Bubble",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-04-08",
    "cnReleaseDate": "2020-10-15"
  },
  {
    "name": "Surtr",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-03-25",
    "cnReleaseDate": "2020-09-24"
  },
  {
    "name": "April",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-03-25",
    "cnReleaseDate": "2020-09-24"
  },
  {
    "name": "Mint",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-03-25",
    "cnReleaseDate": "2020-09-24"
  },
  {
    "name": "Arene",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-03-25",
    "cnReleaseDate": "2020-09-24"
  },
  {
    "name": "Stormeye",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Pith",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Touch",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Reserve Operator - Caster",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Sharp",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Reserve Operator - Logistics",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Reserve Operator - Sniper",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Reserve Operator - Melee",
    "obtainMethod": "Integrated Strategies Mode",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Eunectes",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Flint",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Tomimi",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Aciddrop",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-02-25",
    "cnReleaseDate": "2020-08-25"
  },
  {
    "name": "Thorns",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-01-20",
    "cnReleaseDate": "2020-08-11"
  },
  {
    "name": "Andreana",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-01-20",
    "cnReleaseDate": "2020-08-11"
  },
  {
    "name": "Jaye",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2021-01-20",
    "cnReleaseDate": "2020-08-11"
  },
  {
    "name": "Chiave",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-11-26",
    "cnReleaseDate": "2020-07-28"
  },
  {
    "name": "Beeswax",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-11-26",
    "cnReleaseDate": "2020-07-28"
  },
  {
    "name": "Scene",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2021-02-04",
    "cnReleaseDate": "2020-07-28"
  },
  {
    "name": "Suzuran",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-10-28",
    "cnReleaseDate": "2020-07-09"
  },
  {
    "name": "Ayerscarpe",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-10-28",
    "cnReleaseDate": "2020-07-09"
  },
  {
    "name": "Folinic",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2020-10-28",
    "cnReleaseDate": "2020-07-09"
  },
  {
    "name": "Click",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-10-28",
    "cnReleaseDate": "2020-07-09"
  },
  {
    "name": "Rosa (Poca)",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-09-29",
    "cnReleaseDate": "2020-06-18"
  },
  {
    "name": "Leonhardt",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-09-29",
    "cnReleaseDate": "2020-06-18"
  },
  {
    "name": "Absinthe",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-09-29",
    "cnReleaseDate": "2020-06-18"
  },
  {
    "name": "Podenco",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-09-29",
    "cnReleaseDate": "2020-06-18"
  },
  {
    "name": "Tsukinogi",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-11-11",
    "cnReleaseDate": "2020-06-02"
  },
  {
    "name": "Asbestos",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-11-11",
    "cnReleaseDate": "2020-06-02"
  },
  {
    "name": "Weedy",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-12-30",
    "cnReleaseDate": "2020-05-01"
  },
  {
    "name": "W",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-12-30",
    "cnReleaseDate": "2020-05-01"
  },
  {
    "name": "Elysium",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-12-30",
    "cnReleaseDate": "2020-05-01"
  },
  {
    "name": "THRM-EX",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-12-30",
    "cnReleaseDate": "2020-05-01"
  },
  {
    "name": "Phantom",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-12-10",
    "cnReleaseDate": "2020-04-21"
  },
  {
    "name": "Shamare",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-12-10",
    "cnReleaseDate": "2020-04-21"
  },
  {
    "name": "Sideroca",
    "obtainMethod": "Activity Acquisition",
    "globalReleaseDate": "2020-12-10",
    "cnReleaseDate": "2020-04-21"
  },
  {
    "name": "Cutter",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-12-10",
    "cnReleaseDate": "2020-04-21"
  },
  {
    "name": "Conviction",
    "obtainMethod": "Code Redemption",
    "globalReleaseDate": "2021-04-01",
    "cnReleaseDate": "2020-04-01"
  },
  {
    "name": "Bagpipe",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-09-10",
    "cnReleaseDate": "2020-03-17"
  },
  {
    "name": "Sesa",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-09-10",
    "cnReleaseDate": "2020-03-17"
  },
  {
    "name": "Bibeak",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-09-10",
    "cnReleaseDate": "2020-03-17"
  },
  {
    "name": "Utage",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-09-10",
    "cnReleaseDate": "2020-03-17"
  },
  {
    "name": "Purestream",
    "obtainMethod": "Limited Time Package",
    "globalReleaseDate": "2021-05-19",
    "cnReleaseDate": "2020-03-02"
  },
  {
    "name": "Ceobe",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-08-26",
    "cnReleaseDate": "2020-02-25"
  },
  {
    "name": "Leizi",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-08-26",
    "cnReleaseDate": "2020-02-25"
  },
  {
    "name": "Nian",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-07-29",
    "cnReleaseDate": "2020-01-16"
  },
  {
    "name": "Aak",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-07-29",
    "cnReleaseDate": "2020-01-16"
  },
  {
    "name": "Hung",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-07-29",
    "cnReleaseDate": "2020-01-16"
  },
  {
    "name": "Snowsant",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-07-29",
    "cnReleaseDate": "2020-01-09"
  },
  {
    "name": "Blaze",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-06-30",
    "cnReleaseDate": "2019-12-24"
  },
  {
    "name": "GreyThroat",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-06-30",
    "cnReleaseDate": "2019-12-24"
  },
  {
    "name": "Ambriel",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-06-30",
    "cnReleaseDate": "2019-12-24"
  },
  {
    "name": "Broca",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-07-15",
    "cnReleaseDate": "2019-12-10"
  },
  {
    "name": "Reed",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-07-15",
    "cnReleaseDate": "2019-12-10"
  },
  {
    "name": "Mostima",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-05-27",
    "cnReleaseDate": "2019-11-19"
  },
  {
    "name": "Bison",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-05-27",
    "cnReleaseDate": "2019-11-19"
  },
  {
    "name": "Waai Fu",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-05-27",
    "cnReleaseDate": "2019-11-19"
  },
  {
    "name": "May",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-05-27",
    "cnReleaseDate": "2019-11-19"
  },
  {
    "name": "Ceylon",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-04-29",
    "cnReleaseDate": "2019-08-27"
  },
  {
    "name": "Flamebringer",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-03-25",
    "cnReleaseDate": "2019-10-15"
  },
  {
    "name": "Breeze",
    "obtainMethod": "Voucher Exchange",
    "globalReleaseDate": "2020-05-20",
    "cnReleaseDate": "2019-11-01"
  },
  {
    "name": "Ethan",
    "obtainMethod": "Voucher Exchange",
    "globalReleaseDate": "2020-05-20",
    "cnReleaseDate": "2019-11-01"
  },
  {
    "name": "Dur-nar",
    "obtainMethod": "Credit Store",
    "globalReleaseDate": "2020-05-20",
    "cnReleaseDate": "2019-10-01"
  },
  {
    "name": "Magallan",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-03-25",
    "cnReleaseDate": "2019-10-15"
  },
  {
    "name": "Vermeil",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-03-25",
    "cnReleaseDate": "2019-10-15"
  },
  {
    "name": "Executor",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-03-25",
    "cnReleaseDate": "2019-10-15"
  },
  {
    "name": "Hellagur",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-04-15",
    "cnReleaseDate": "2019-09-10"
  },
  {
    "name": "Myrtle",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-04-15",
    "cnReleaseDate": "2019-09-10"
  },
  {
    "name": "Astesia",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-04-15",
    "cnReleaseDate": "2019-09-10"
  },
  {
    "name": "Schwarz",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-04-29",
    "cnReleaseDate": "2019-08-27"
  },
  {
    "name": "Greyy",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-26",
    "cnReleaseDate": "2019-07-09"
  },
  {
    "name": "Sussurro",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-04-29",
    "cnReleaseDate": "2019-08-27"
  },
  {
    "name": "Swire",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-26",
    "cnReleaseDate": "2019-07-09"
  },
  {
    "name": "Glaucus",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-04-29",
    "cnReleaseDate": "2019-08-27"
  },
  {
    "name": "Ch'en",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-26",
    "cnReleaseDate": "2019-07-09"
  },
  {
    "name": "Popukar",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-26",
    "cnReleaseDate": "2019-07-09"
  },
  {
    "name": "Spot",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-22",
    "cnReleaseDate": "2019-07-09"
  },
  {
    "name": "Skadi",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-05",
    "cnReleaseDate": "2019-05-30"
  },
  {
    "name": "Grani",
    "obtainMethod": "Event Reward",
    "globalReleaseDate": "2020-02-05",
    "cnReleaseDate": "2019-05-30"
  },
  {
    "name": "Nightmare",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-05",
    "cnReleaseDate": "2019-05-30"
  },
  {
    "name": "Beehunter",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-05",
    "cnReleaseDate": "2019-05-30"
  },
  {
    "name": "Midnight",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-02-05",
    "cnReleaseDate": "2019-05-30"
  },
  {
    "name": "Catapult",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-22",
    "cnReleaseDate": "2019-05-23"
  },
  {
    "name": "Savage",
    "obtainMethod": "Anniversary Reward",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "SilverAsh",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Saria",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Hoshiguma",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Nightingale",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Shining",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Angelina",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Eyjafjalla",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Ifrit",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Siege",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Exusiai",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "FEater",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Manticore",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Sora",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Istina",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Pramanix",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Cliffheart",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Firewatch",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Provence",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Vulcan",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Croissant",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Liskarm",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Projekt Red",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Nearl",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Warfarin",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Silence",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Mayer",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Skyfire",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Amiya",
    "obtainMethod": "Main Story",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Meteorite",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Platinum",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Blue Poison",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Specter",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Lappland",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Indra",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Franka",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Texas",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Zima",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Ptilopsis",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Shaw",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Earthspirit",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Deepcolor",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Gummy",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Cuora",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Matterhorn",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Perfumer",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Gavial",
    "obtainMethod": "Credit Store",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Myrrh",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Rope",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Gravel",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Mousse",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Estelle",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Frostleaf",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Matoimaru",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Dobermann",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Vigna",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Scavenger",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Courier",
    "obtainMethod": "Credit Store",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Shirayuki",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Meteor",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Jessica",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Gitano",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Haze",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Orchid",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Steward",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Ansel",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Hibiscus",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Lava",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Adnachiel",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Kroos",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Beagle",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Cardigan",
    "obtainMethod": "Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Melantha",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Plume",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Vanilla",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Fang",
    "obtainMethod": "Recruitment & Headhunting",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "12F",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Durin",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Rangers",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Noir Corne",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Yato",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Castle-3",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  },
  {
    "name": "Lancet-2",
    "obtainMethod": "Recruitment",
    "globalReleaseDate": "2020-01-16",
    "cnReleaseDate": "2019-04-30"
  }
]

function getQuali(rarity: number): string | null {
  switch (rarity) {
    case 5: {
      return 'Top Operator'
    }
    case 4: {
      return 'Senior Operator'
    }
    case 1: {
      return 'Starter'
    }
    case 0: {
      return 'Robot'
    }
    default: {
      return null
    }
  }
}

// function replaceTextDescriptionValues(text: string | null, blackboard: Array<{ key: string, value: number }>) {
//   if (!text) return ""

//   const textWithReplacedTags = text.split(/(\{[^}]*\})/);

//   return textWithReplacedTags.map((sentence) => {
//     const objToReplace = blackboard.find((item) => {
//       return sentence.match(/\{[^}]*\}/g) ? sentence.toLowerCase().includes(item.key) : undefined
//     });

//     if (!objToReplace) return sentence

//     if (sentence.includes('0%')) {
//       return new Intl.NumberFormat('default', { style: 'percent' }).format(objToReplace.value);
//     } else {
//       return objToReplace.value
//     }
//   }).join('');
// }
// function parseActivationType(typeNumber: number): string {
//   switch (typeNumber) {
//     case 0:
//       return 'Passive'
//     case 1:
//       return 'Manual'
//     case 2:
//       return 'Auto'
//     default: {
//       return ''
//     }
//   }
// }
// function parseChargeType(typeNumber: number): string {
//   switch (typeNumber) {
//     case 1:
//       return 'Per Second Recovery'
//     case 2:
//       return 'Offensive Recovery'
//     case 4:
//       return 'Defensive Recovery'
//     default: {
//       return ''
//     }
//   }
// }

// interface ISkillEntry {
//   id: string,
//   info: {
//     levels: Array<{
//       name: string,
//       rangeId: string | null,
//       description: string | null,
//       skillType: number,
//       spData: {
//         spType: number,
//         spCost: number,
//         initSp: number,
//       },
//       duration: number,
//       blackboard: Array<{
//         key: string,
//         value: number,
//       }>
//     }>,
//   }
// }
// interface ITags {
//   termDescriptionDict: {
//     [key: string]: {
//       termId: string,
//       termName: string,
//       description: string,
//     }
//   }
// }
// interface IRange {
//   [key: string]: {
//     id: string,
//     grids: Array<{
//       row: number,
//       col: number,
//     }>
//   }
// }

// async function processRange() {
//   const res3 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/range_table.json');
//   const rangeTable: IRange = await res3.json();
//   const rangeTableEntries = Object.entries(rangeTable).map((entry) => {
//     return {
//       id: entry[0],
//       info: entry[1],
//     }
//   })

//   for (const r of rangeTableEntries) {
//     const isExisted = await prisma.range.findUnique({
//       where: {
//         id: r.id
//       },
//     })

//     let range;

//     if (!isExisted) {
//       range = await prisma.range.create({
//         data: {
//           name: r.id,
//           grid: {
//             create: r.info.grids
//           },
//         },
//       })

//       console.log(`Created range with name: ${range.name}`)
//     } else {
//       console.log(`${range.name} is already exists`)
//     }
//   }
// }

// async function processSkills() {
//   const res = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/skill_table.json');
//   const skills = await res.json();
//   const skillsEntries = Object.entries(skills).map((entry) => {
//     return {
//       id: entry[0],
//       info: entry[1],
//     } as ISkillEntry;
//   });

//   // const res2 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/gamedata_const.json');
//   // const skillTextTags: ITags = await res2.json();

//   // const res3 = await fetch('https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/en_US/gamedata/excel/range_table.json');
//   // const rangeTable: IRange = await res3.json();
//   // const rangeTableEntries = Object.entries(rangeTable).map((entry) => {
//   //   return {
//   //     id: entry[0],
//   //     info: entry[1],
//   //   }
//   // })

//   for (let i = 0; i < skillsEntries.length; i++) {
//     const entry = skillsEntries[i];

//     const isExisted = await prisma.skill.findUnique({
//       where: {
//         id: entry.id
//       }
//     })

//     let skill;

//     if (isExisted) {
//       skill = await prisma.skill.update({
//         where: {
//           id: entry.id,
//         },
//         data: {
//           // id: entry.id,
//           skillId: entry.id.includes('skcom') || entry.id.includes('sktok') ? 0 : parseInt(entry.id.replace(/.+_/g, '')),
//           // name: entry.info.levels[0].name,
//           // activationType: parseActivationType(entry.info.levels[0].skillType),
//           // chargeType: parseChargeType(entry.info.levels[0].spData.spType),
//           // iconUrl: `https://raw.githubusercontent.com/Aceship/Arknight-Images/main/skills/skill_icon_${entry.id}.png`,
//           levels: {
//             create: entry.info.levels.map((level, idx) => {
//               return {
//                 levelId: idx,
//                 spCost: level.spData.spCost,
//                 initSp: level.spData.initSp,
//                 description: replaceTextDescriptionValues(level.description, level.blackboard),
//                 duration: `${Math.round(level.duration)} seconds`,
//                 range: level.rangeId ? {
//                   connect: {
//                     name: level.rangeId,
//                   }
//                 } : undefined,
//               }
//             })
//           },
//         },
//       });

//       // console.log(`Created skill with id: ${skill.id}`);
//       console.log(`${skill.id} updated`);
//     } else {
//       // console.log(`${isExisted?.id} is already exists`);
//       console.log(`No such id: ${skill.id}`);
//     }
//   }
// }

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

    const qualiTag = getQuali(p.info.rarity);

    const isExisted = await prisma.operator.findFirst({
      where: {
        id: p.id,
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
          // obtainApproach: operatorsObtainMethod.find(({ name }) => p.info.name === name)?.obtainMethod,
          tagList: p.info.tagList ? qualiTag ? [...p.info.tagList, qualiTag] : p.info.tagList : [],
          releaseDate: operatorsObtainMethod.find(({ name }) => name === p.info.name)?.globalReleaseDate,
          // gender: gender(p.id),
          // trait: p.info.trait ? replaceTextDescriptionValues(p.info.description, p.info.trait.candidates[p.info.trait.candidates.length - 1].blackboard) : p.info.description,
          // phases: {
          //   create: p.info.phases.map((phase) => {
          //     return {
          //       id: p.id,
          //       range: {
          //         connect: {
          //           name: phase.rangeId,
          //         }
          //       },
          //       maxLevel: phase.maxLevel,
          //       attributesKeyFrames: {
          //         create: phase.attributesKeyFrames.map((keyFrame) => {
          //           return {
          //             maxHp: keyFrame.data.maxHp,
          //             atk: keyFrame.data.atk,
          //             def: keyFrame.data.def,
          //             magicResistance: keyFrame.data.magicResistance,
          //             cost: keyFrame.data.cost,
          //             blockCount: keyFrame.data.blockCnt,
          //             baseAttackTime: keyFrame.data.baseAttackTime,
          //             respawnTime: keyFrame.data.respawnTime,
          //           }
          //         })
          //       }
          //     }
          //   })
          // },
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