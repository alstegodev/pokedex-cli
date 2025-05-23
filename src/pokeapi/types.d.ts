export type ShallowLocations = {
    count: number;
    next: string;
    previous: string;
    results: Location[];
}
export type Location = {
    name: string;
    url: string;
}
export type detailedLocation = {
    encounter_method_rates: [];
    game_index: number;
    id: number;
    location: Location;
    name: string;
    names: [];
    pokemon_encounters: PokemonEncounter[];
}
export type PokemonEncounter = {
    pokemon: {
        name: string;
        url: string;
    };
    version_details: [];
}

export type detailedPokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
}