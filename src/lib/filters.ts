import { Availability, SkinType } from "$lib/skinsData";

export const FILTERS: Array<SkinType | Availability> = [
    SkinType.default,
    SkinType.baseRecolor,
    SkinType.special,
    SkinType.hat,
    SkinType.cosmic,
    SkinType.obsidian,
    SkinType.golden,
    Availability.limited
]