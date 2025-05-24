export type ShallowLocations = {
    count: number;
    next: string;
    previous: string;
    results: NamedAPIResource[];
}

export type DetailedLocation = {
    encounter_method_rates: [];
    game_index: number;
    id: number;
    location: Location;
    name: string;
    names: [];
    pokemon_encounters: PokemonEncounter[];
}
export type PokemonEncounter = {
    pokemon: NamedAPIResource;
    version_details: [];
}

export type DetailedPokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    stats: PokemonStats[];
    types: PokemonTypes[];
}

export type PokemonStats = {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number
}


export type PokemonTypes = {
    slot: number;
    type: NamedAPIResource;
}

export type NamedAPIResource = {
    name: string;
    url: string;
}