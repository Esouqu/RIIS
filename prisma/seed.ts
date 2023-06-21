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

const operatorsObtainMethod = [
  {
    "name": "Executor the Ex Foedere",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Spuria",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Insider",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Tulip",
    "obtainMethod": ""
  },
  {
    "name": "Friston-3",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "U-Official",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Muelsyse",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Ho'olheyak",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Melanite",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Silence the Paradigmatic",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Ines",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Cement",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Humus",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Morgan",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Kirin X Yato",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Rathalos S Noir Corne",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Terra Research Commission",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Qiubai",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Wind Chimes",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Firewhistle",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Jieyun",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Chongyue",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Lin",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Reed The Flame Shadow",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Harmonie",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Puzzle",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Quartz",
    "obtainMethod": "Voucher Exchange"
  },
  {
    "name": "Qanipalaat",
    "obtainMethod": "Voucher Exchange"
  },
  {
    "name": "Lunacub",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Vigil",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Penance",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Texas the Omertosa",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Stainless",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Paprika",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Totter",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Dagda",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Luo Xiaohei",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Highmore",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Młynar",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Proviso",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Cantabile",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Minimalist",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Pozëmka",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Gavial the Invincible",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Dorothy",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Greyy the Lightningbearer",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Astgenne",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Ebenholz",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Hibiscus the Purifier",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Czerny",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Erato",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Windflit",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Lumen",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Irene",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Specter the Unchained",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Horn",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Rockrock",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Chestnut",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Heidi",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Kazemaru",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Fiammetta",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Enforcer",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Quercus",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Goldenglow",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Kroos the Keen Glint",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Blacknight",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Lee",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Ling",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Shalem",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Gnosis",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Aurora",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Kjera",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Nine-Colored Deer",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Honeyberry",
    "obtainMethod": "Voucher Exchange"
  },
  {
    "name": "Pudding",
    "obtainMethod": "Voucher Exchange"
  },
  {
    "name": "'Justice Knight'",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Wild Mane",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Corroserum",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Flametail",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Nearl the Radiant Knight",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Fartooth",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Ashlock",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Saileach",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Mulberry",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Roberta",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Tequila",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "La Pluma",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Mizuki",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Ch'en the Holungday",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Pallas",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Carnelian",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Kirara",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Bena",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Indigo",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Skadi the Corrupting Heart",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Kal'tsit",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Gladiia",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Akafuyu",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Passenger",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Toddifons",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Heavyrain",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Ash",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Frost",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Blitz",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Tachanka",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Dusk",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Saga",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Mr. Nothing",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Lava the Purgatory",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Tuye",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Archetto",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Iris",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Beanstalk",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Mountain",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Robin",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Kafka",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Pinecone",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Jackie",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Amiya (Guard)",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Whisperain",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Mudrock",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Rosmontis",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Blemishine",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Aosta",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Whislash",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Bubble",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Surtr",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "April",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Mint",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Arene",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Stormeye",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Pith",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Touch",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Reserve Operator - Caster",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Sharp",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Reserve Operator - Logistics",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Reserve Operator - Sniper",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Reserve Operator - Melee",
    "obtainMethod": "Integrated Strategies Mode"
  },
  {
    "name": "Eunectes",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Flint",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Tomimi",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Aciddrop",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Thorns",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Andreana",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Jaye",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Chiave",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Beeswax",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Scene",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Suzuran",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Ayerscarpe",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Folinic",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Click",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Rosa (Poca)",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Leonhardt",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Absinthe",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Podenco",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Tsukinogi",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Asbestos",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Weedy",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "W",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Elysium",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "THRM-EX",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Phantom",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Shamare",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Sideroca",
    "obtainMethod": "Activity Acquisition"
  },
  {
    "name": "Cutter",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Conviction",
    "obtainMethod": "Code Redemption"
  },
  {
    "name": "Bagpipe",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Sesa",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Bibeak",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Utage",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Purestream",
    "obtainMethod": "Limited Time Package"
  },
  {
    "name": "Ceobe",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Leizi",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Nian",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Aak",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Hung",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Snowsant",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Blaze",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "GreyThroat",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Ambriel",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Broca",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Reed",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Mostima",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Bison",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Waai Fu",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "May",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Ceylon",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Flamebringer",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Breeze",
    "obtainMethod": "Voucher Exchange"
  },
  {
    "name": "Ethan",
    "obtainMethod": "Voucher Exchange"
  },
  {
    "name": "Dur-nar",
    "obtainMethod": "Credit Store"
  },
  {
    "name": "Magallan",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Vermeil",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Executor",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Hellagur",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Myrtle",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Astesia",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Schwarz",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Greyy",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Sussurro",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Swire",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Glaucus",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Ch'en",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Popukar",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Spot",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Skadi",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Grani",
    "obtainMethod": "Event Reward"
  },
  {
    "name": "Nightmare",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Beehunter",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Midnight",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Catapult",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Savage",
    "obtainMethod": "Anniversary Reward"
  },
  {
    "name": "SilverAsh",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Saria",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Hoshiguma",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Nightingale",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Shining",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Angelina",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Eyjafjalla",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Ifrit",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Siege",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Exusiai",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "FEater",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Manticore",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Sora",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Istina",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Pramanix",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Cliffheart",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Firewatch",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Provence",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Vulcan",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Croissant",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Liskarm",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Projekt Red",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Nearl",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Warfarin",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Silence",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Mayer",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Skyfire",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Amiya",
    "obtainMethod": "Main Story"
  },
  {
    "name": "Meteorite",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Platinum",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Blue Poison",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Specter",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Lappland",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Indra",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Franka",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Texas",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Zima",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Ptilopsis",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Shaw",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Earthspirit",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Deepcolor",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Gummy",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Cuora",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Matterhorn",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Perfumer",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Gavial",
    "obtainMethod": "Credit Store"
  },
  {
    "name": "Myrrh",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Rope",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Gravel",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Mousse",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Estelle",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Frostleaf",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Matoimaru",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Dobermann",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Vigna",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Scavenger",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Courier",
    "obtainMethod": "Credit Store"
  },
  {
    "name": "Shirayuki",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Meteor",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Jessica",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Gitano",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Haze",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Orchid",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Steward",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Ansel",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Hibiscus",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Lava",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Adnachiel",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Kroos",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Beagle",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Cardigan",
    "obtainMethod": "Headhunting"
  },
  {
    "name": "Melantha",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Plume",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Vanilla",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "Fang",
    "obtainMethod": "Recruitment & Headhunting"
  },
  {
    "name": "12F",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Durin",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Rangers",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Noir Corne",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Yato",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Castle-3",
    "obtainMethod": "Recruitment"
  },
  {
    "name": "Lancet-2",
    "obtainMethod": "Recruitment"
  }
]

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
          obtainApproach: operatorsObtainMethod.find(({ name }) => p.info.name === name)?.obtainMethod,
          // tagList: p.info.tagList !== null ? p.info.tagList : [],
          // gender: gender(p.id),
          trait: p.info.trait ? replaceTextDescriptionValues(p.info.description, p.info.trait.candidates[p.info.trait.candidates.length - 1].blackboard) : p.info.description,
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