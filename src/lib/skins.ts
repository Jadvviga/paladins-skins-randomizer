// skins imgs are 650x650
// icons are 256x256

import { CHAMPIONS } from "$lib/champions";
import { Availability, Rarity, type Skin, SkinType } from "$lib/skinsData";

//ADD rest of skins - last updat was the Omen with egipt battle pass upadte
// add new type fo upadte to later be able to check waht upadte the skins comes from
export const SKINS: Array<Skin> = [
    {
        champion: CHAMPIONS.Androxus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 3, 11),
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28),
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28),
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Wraith",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 9, 12)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Gaunt",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 9, 12)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Sanguine",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 9, 12)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Exalted",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2017, 3, 9)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Imperator",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 12, 18)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "X",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 16)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Stage 4",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 16)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Dasher's Antlers",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2016, 12, 7)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Screech",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 10, 4)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Cangaceiro",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 11, 8)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Huntsman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 4, 26)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Steam Demon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Fallen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 6, 6)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Battlesuit Godslayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 1, 16)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Avatar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Modded",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Eliminate",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 5, 22)
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Condemned Celebrant",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: CHAMPIONS.Androxus,
        name: "Grave Danger",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2018, 11, 14)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Hellion",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Plated",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Tempered",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Heirloom Crest",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 1, 10)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Ronin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 8, 9)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Xeno-Buster",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 9, 11)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 4, 1)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Ska'drin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 1, 8)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Scorned",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 1, 8)
    },
    {
        champion: CHAMPIONS.Ash,
        name: "Draconian Huntress",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 11, 17)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Chronomancer",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Last Hope",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Legionnaire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 4, 24)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Corrupted",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 5, 11)
    },
    {
        champion: CHAMPIONS.Atlas,
        name: "Vile",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 5, 11)
    },
    {
        champion: CHAMPIONS.Azaan,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: CHAMPIONS.Azaan,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: CHAMPIONS.Azaan,
        name: "Kingdom's End",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: CHAMPIONS.Azaan,
        name: "Forgemaster",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: CHAMPIONS.Azaan,
        name: "Dark Drake",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Foreman",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Artisan",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Tinkerer",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Stone-Cut",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Hi-Tek",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Team Fortress 2",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Swashbuckler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Barik,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Betty,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Betty,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Betty,
        name: "Royal Explosive",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Betty,
        name: "Queen of Diamonds",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Betty,
        name: "Dragonette",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Monarch",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Emerald",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Ruby",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Biz-King",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Pumpking",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "A-bomb-inable",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Twitch Prime King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Love Machine",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Digitized",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Honey King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Polar Bear",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Crash King 47",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.BombKing,
        name: "Crash King 48",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Summit",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Alpine",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Mesa",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Commando",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Brawler",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Envy",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Triggerman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Kingpin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Buck Wild",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Buckules",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Ripjaw",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Buck,
        name: "Great Orange",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Free Spirit",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Change of Heart",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Skull and Bones",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Pride of the Realm",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Caspian,
        name: "Long Live the King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Coral",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Amaranthine",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Azure",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Northern Watch",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Classic - Timber",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Classic - Tinder",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Night Bane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Blood Moon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Sun Kissed",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Copacabana",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Dune Crawler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "Dragoncaller",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Cassie,
        name: "WHIPPED CREAM",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Exemplar",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Abyssal Acolyte",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Pyre-Lord Magnus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Count",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Midnight Royal",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Qrow Branwen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Crimson Crow",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Corvus,
        name: "Eternal Waltz",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Dredge,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Dredge,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Dredge,
        name: "Buccaneer",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Dredge,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Dredge,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Dredge,
        name: "Bare Bones",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Tyrant",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Lust",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Pride",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Wrath",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "HRX 2018",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Dreadhunter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Terrormorph",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "DZ-03 Draco",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Abyssal Lord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Pyre Warrior",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Drogoz,
        name: "Freegle",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Evie,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Evocation",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Conjuration",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Divination",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Black Ice",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Star Glam",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Troublemaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Bewitching",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Sweet Shop",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Evie,
        name: "Toothache",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Daring",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Gallant",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Onslaught",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Old Glory",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Tough Cookie",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Invitational",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "FN-01 Helios",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "FN-01 Erebos",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "God of War",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Enforcer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Knightmare",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Sanguine",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Digitized",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Fernando,
        name: "Ultimatum",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Furia,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Iron Maiden",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Coldsnap",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Aurora",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Battlesuit Angel",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Solfire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Dragonslayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Soul-Stealer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Weiss Schnee",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Soul's Animus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Shrine Demon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Furia,
        name: "Shrine Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Beast",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Deathcap",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Lichen",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Toadstool",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Tribesman",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Lobster",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Brimstone",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Neon Demon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grohk,
        name: "Chieftain",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Grover,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Autumn",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Lavender",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Blightbark",
        type: SkinType.other,
        rarity: Rarity.uncommon,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Winter",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Rosebud Canopy",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Frosty Foliage",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Doom Shroom",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "GR0B0T",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Soul Briar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Seeping Corruption",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Chaos Grovos",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Grover,
        name: "Grovos",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Imani,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Warder",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Snowdrift",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Stellar Sorceress",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Imani,
        name: "E-Mani",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Genesis",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Imani,
        name: "Yang Xiao Long",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Inara,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Sunstone",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Garnet",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Amethyst",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Celestine",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Ice Walker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Iron Madam",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Digitized",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Stellar Sentinel",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Lady Liberty",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Inara,
        name: "Defragged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Io,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Io,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Io,
        name: "Feral",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Io,
        name: "Starfall",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Io,
        name: "Pirate's Treasure",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Io,
        name: "Eight Oceans",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Io,
        name: "Stellar Protector",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Io,
        name: "Salt",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Io,
        name: "Corrupted",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Io,
        name: "Frozen Moon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Millennium",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Capricorn",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Resplendent",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Eclipse",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Ghoulish Goalie",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Squidbert",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Exarch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Gentleman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Soul Eater",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Mernos",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Eternal Fervor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Dark Fervor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Aspirant",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Jenos,
        name: "Soul Devourer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kasumi,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Kasumi,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Kasumi,
        name: "Evil Spirit",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kasumi,
        name: "Spirited",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kasumi,
        name: "Lovestruck",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Khan,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Royal Guard",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Ameri-Khan",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Overlord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Mixer",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Safecracker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Saboteur",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Draconic Enforcer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Ironscale",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Eternal Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Dark Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Justin OH",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "VIP Justin OH",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Firing Squad",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Khan,
        name: "Judge & Jury",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Atomic",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Hunter",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Tracker",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Sharpshooter",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Cutthroat",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Chillweave Beanie Hat",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Viking",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Nova Strike",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Star Silver",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Battlesuit Eagle Eye",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Valentina",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Dunestrider",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Kinessa,
        name: "Sandstrider",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Koga,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Exile",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Prototype",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Eternal Retribution",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Dark Retribution",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Bossfight",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Koga,
        name: "Bloody Bakemono",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Lex,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Lawbringer",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Justicar",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Peacekeeper",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Croakie",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Longboard",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Sarrada",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "L-Exo Suit",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Renegade",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Covert Ops",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Bounty Hunter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Headhunter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Lex,
        name: "Yasamin",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard

    },
    {
        champion: CHAMPIONS.Lian,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Dusk",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Peridot",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Veridian",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Goddess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lian,
        name: "High Elf",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Galactic Scion",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Shore Patrol",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Beach Bash",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Dark Monarch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Death-Goddess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Eternal Conflict",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Dark Conflict",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Soulweaver",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lian,
        name: "Death Mage",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Wicked Hex",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Sun Born",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Stellar Witch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Heartless Pharaoh",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Lillith,
        name: "Weaver Reborn",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Vagrant",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Guttersnipe",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Riff Raff",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Alley Cat",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Dreamhack",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Strike",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Demonette",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Merrymaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Raeve",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Pirate's Treasure",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Eight Oceans",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Emerald Bandit",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Temple Raider",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Cammie",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Schoolyard",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Study Hall",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Maeve,
        name: "Celebrant Cat Burglar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Montego",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Aruba",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Bahama",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Barrier Wreath",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Plushy",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Cuddly",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Volcanic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Dutchman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Prosperous",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Akuma",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Crocfather",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Makoa,
        name: "Cold Blooded",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Cursed",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Defiler",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Hexer",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Juju",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Na'Vi",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Prickly",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Chancellor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Wickerman",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Shadow Lord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Dragon Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.MalDamba,
        name: "Shiro",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Plum",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Dragonborn",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Cuddly",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Moji,
        name: "PEEKABOO",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Akazukin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Moji,
        name: "Red Ridin'",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Nyx,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Nyx,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Nyx,
        name: "Crimson Queen",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Nyx,
        name: "Divine Matriarch",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Nyx,
        name: "Permafrost",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Nyx,
        name: "Scorched",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Octavia,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Octavia,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Octavia,
        name: "Commander",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Octavia,
        name: "Maverick",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Octavia,
        name: "Beachside",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Octavia,
        name: "Freedom Fighter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Omen,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Omen,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Omen,
        name: "Sonej",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Omen,
        name: "Carrion",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Omen,
        name: "Flame-born Jace",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Omen,
        name: "Frost-born Jace",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Sulfur",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Tactical",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Iodine",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Uranium",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Pandamonium",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Raider",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Love Specs",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Arctic",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Invader",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Mad Scientist",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Pip,
        name: "Inventor",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Subjugator",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Abyssal Lord",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Crypt Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Undead Colossus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Kraumpus",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Raum,
        name: "R.O.M.",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Heatsink",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Raum,
        name: "The Harlequin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Raum,
        name: "Eternal Devilry",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Harvest",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Beach Bunny",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Pumpkin Patch",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Class President",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Valedictorian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Admiration",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Rei,
        name: "Delight",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Sprocket",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Assembly",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Gizmo",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "B.E.T.A.",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "H.A.W.K.",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Lil'Andy",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Robo Force",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Star Slayer",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Pirate's Treasure",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Ruckus,
        name: "Eight Oceans",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Hot Shot",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Iced Out",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Sea Queen",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Crimson Tide",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Blake Belladonna",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Wings of Darkness",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Saati,
        name: "Wings of Carnage",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Taboo",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Prophecy",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Umbral",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Parasite",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Infernal",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Divine",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Madame",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Jade Priestess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Cottontail",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Expo 2018",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Stellar Mender",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Salem",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Doom Bringer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Flame Bringer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Seris,
        name: "Celebrant Soothsayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Bravado",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Charisma",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Renowned",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Burrito",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "In the Bag",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Vigilante",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Guardian",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Crime Fighter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Outlaw",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.ShaLin,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Guild",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Pilot Suit",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Classic - Twilight",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Classic - Aqua",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Classic - Canary",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Classic - Blush",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Operative",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Chrome",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Heartbreaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Kunoichi",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Academic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Temptress",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Devilish",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "GG Magree",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "VIP GG Magree",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Skye,
        name: "Frozen Over",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Phoenix",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Ghillie",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Raven",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Coldsnap",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Bad Mother Clucker",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Switch",
        type: SkinType.special,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Infiltrator",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Mercenary",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Remix",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Redux",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Hustler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Swindler",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Scalebane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Dragonsbane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Strix,
        name: "Bazaar",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Geist",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Moonstone",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Oni",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Trick or Treat",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Wukong",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Talus,
        name: "Monkey-King",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Monolith",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Thrall",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Jotunn",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Abominable",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Steel Forged",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Cosmic Titan",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Terminus,
        name: "Super Nova",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Beast Slayer",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Nightstalker",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Tomb Keeper",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Sphinx Soldier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Lifeguard",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Aka Oni",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tiberius,
        name: "Aoi Oni",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Arcanist",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Cartography",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Historian",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Grave-robber's Spoils",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Clockwork",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Dark Lord",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Berserker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Torvald,
        name: "Revenant",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Alluvial",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Conifer",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Heartwood",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Baroness",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Lotus",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Dire Wolf",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Red Winter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Drakefire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Archangel",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Heartbreaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Gunslinger",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Bandit",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Firebrand",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Frostbrand",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Marauder",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Royal Mark",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Eternal Emissary",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Deathless Emissary",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Daisy Dukes",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Tyra,
        name: "Get Served",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.VII,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.VII,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.VII,
        name: "Crimson Guard",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.VII,
        name: "Ivy Sentinel",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.VII,
        name: "Death Orchid",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.VII,
        name: "Biting Wind",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.VII,
        name: "Deadly Pallor",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.VII,
        name: "Pandemonium",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Vatu,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard
    },
    {
        champion: CHAMPIONS.Vatu,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery
    },
    {
        champion: CHAMPIONS.Vatu,
        name: "Sorrow",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Vatu,
        name: "Duty",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.limited
    },
    {
        champion: CHAMPIONS.Vatu,
        name: "Mayhem",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Vatu,
        name: "Abyss Cultist",
        type: SkinType.other,
        rarity: Rarity.rare,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 6, 30)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 1)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2022, 8, 17)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Khaki",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 6, 30)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Olive",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Navy",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Ushanka",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 11, 1)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Lone Heart Patch",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 2, 8)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Charcoal",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2016, 7, 14)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Invitational",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2016, 12, 20)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Soldier +",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Code Green Trooper",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Code Green Grenadier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Code Green Bandolier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Code Green Comms",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 25)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "V1-KTOR",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2017, 8, 23)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Reaver",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 2, 21)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Full Moon",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Legionnaire",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2019, 1, 16)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Draconic Fighter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited,
        releaseDate: new Date(2020, 4, 29)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Hunter's Bane",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 4, 29)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Chase",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 7, 21)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Rambo",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 2, 11)
    },
    {
        champion: CHAMPIONS.Viktor,
        name: "Celebrant Soldier",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 2, 11)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 11, 15)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2019, 4, 24)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Manipulator",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Deceiver",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Silvertongue",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.limited,
        releaseDate: new Date(2017, 11, 15)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Full Throttle",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Day Walker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Contessa",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Student of Magic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Novice",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Sigma",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 12, 24)
    },
    {
        champion: CHAMPIONS.Vivian,
        name: "Retro",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2023, 2, 23)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Herald",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Seal Guardian",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Honor Guard",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Galactic Conqueror",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 11, 25)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Ruby Rose",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 6, 29)
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Danse Macabre",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Vora,
        name: "Patchwork Assassin",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 6, 28)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2022, 5, 11)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Bluebell",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Lilac",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 5, 3)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Viceroy",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Jolly Holly",
        type: SkinType.hat,
        rarity: Rarity.rare,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 12, 18)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Hemlock",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2017, 7, 26)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Firecracker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 1, 10)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Sugar Plum",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 12, 10)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Will.0",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: CHAMPIONS.Willo,
        name: "Yellow Jacket",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 9, 30)
    },
    {
        champion: CHAMPIONS.Yagorath,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: CHAMPIONS.Yagorath,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: CHAMPIONS.Yagorath,
        name: "Grave Worm",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: CHAMPIONS.Yagorath,
        name: "Caustic",
        type: SkinType.baseRecolor,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2021, 2, 3)
    },
    {
        champion: CHAMPIONS.Yagorath,
        name: "Leviathan",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 11, 10)
    },
    {
        champion: CHAMPIONS.Yagorath,
        name: "Cuddly",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 8, 17)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 4, 7)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Obsidian",
        type: SkinType.obsidian,
        rarity: Rarity.rare,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 7, 17)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Cosmic",
        type: SkinType.cosmic,
        rarity: Rarity.epic,
        availability: Availability.mastery,
        releaseDate: new Date(2017, 7, 26)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2021, 5, 26)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Seer",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 10, 13)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Mystic",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 10, 13)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Soothsayer",
        type: SkinType.baseRecolor,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2016, 10, 13)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Snapdragon",
        type: SkinType.baseRecolor,
        rarity: Rarity.rare,
        availability: Availability.standard,
        releaseDate: new Date(2016, 5, 5)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Quicksilver",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Convention 2017",
        type: SkinType.special,
        rarity: Rarity.rare,
        availability: Availability.limited,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Genie",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 1, 16)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Replicant",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Carnival",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 4, 12)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Death Speaker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.standard,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Banshee",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2018, 9, 27)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Street Style",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.unlimited,
        releaseDate: new Date(2019, 4, 24)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Mermaid",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 9, 11)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Siren",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2019, 9, 11)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Divine Daughter",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 3, 4)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "High Priestess",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 3, 4)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Full Dive",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Rezzed",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 3, 31)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Jurassic",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: CHAMPIONS.Ying,
        name: "Celebrant Spellcaster",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 1, 26)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Default",
        type: SkinType.default,
        rarity: Rarity.common,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Golden",
        type: SkinType.golden,
        rarity: Rarity.legendary,
        availability: Availability.mastery,
        releaseDate: new Date(2023, 3, 29)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Nomad",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Greed",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Warlord",
        type: SkinType.baseRecolor,
        rarity: Rarity.uncommon,
        availability: Availability.standard,
        releaseDate: new Date(2017, 6, 14)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Ebon Star",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2017, 12, 18)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Demon Slayer",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2018, 3, 28)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Conqueror",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2017, 9, 7)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Omega",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2019, 3, 27)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Underkeeper",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Forest Stalker",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.limited,
        releaseDate: new Date(2020, 10, 28)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Kazu",
        type: SkinType.other,
        rarity: Rarity.legendary,
        availability: Availability.exclusive,
        releaseDate: new Date(2021, 7, 21)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Mei",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 8, 17)
    },
    {
        champion: CHAMPIONS.Zhin,
        name: "Nova Mei",
        type: SkinType.other,
        rarity: Rarity.epic,
        availability: Availability.exclusive,
        releaseDate: new Date(2022, 8, 17)
    }
]
