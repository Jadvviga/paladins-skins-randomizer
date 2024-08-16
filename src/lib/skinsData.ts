import { CHAMPIONS } from "$lib/champions";

export enum SkinType {
    default = "default",
    baseRecolor = "baseRecolor", //includes recolors for old models
    recolor = "recolor", //recolors of skins form battle passes
    special = "special", //exclusive ones, like XBox Andro or TF2 Barik, that are not available to buy but require something to do
    hat = "hat", //the skins that are just base skins with different hat //official cllaed parts and pieces
    cosmic = "cosmic",
    obsidian = "obsidian",
    golden = "golden",
    other = "other"
}

export enum Availability {
    standard = "standard",
    mastery = "mastery",
    exclusive = "exclusive",
    unlimited = "unlimited",
    limited = "limited"
}

export enum Rarity {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    epic = "epic",
    legendary = "legendary"
}

export type Skin = {
    name: string;
    champion: CHAMPIONS;
    fileName?: string;
    releaseDate?: Date;
    type: SkinType;
    availability: Availability,
    rarity: Rarity,
    sound?: string;
}

export type SkinFilter = {
    label: string;
    filter?: SkinType | Availability | 'all';
    tooltip?: string;
    parent?: string;
    isParent?: boolean;
}

export type FilterCheckbox = {
    label: string;
    checked: boolean;
}

export type Update = {
    name: string;
    date: Date;
}

export function getChampForFile(champion: CHAMPIONS | string): string {
    return String(champion).toLowerCase().replaceAll(' ', '_');
}

export function getFileName(skin: Skin): string {
    const champ = getChampForFile(skin.champion)
    const name = String(skin.name).toLowerCase().replaceAll(' ', '_');
    return champ.concat('_', name)
}



