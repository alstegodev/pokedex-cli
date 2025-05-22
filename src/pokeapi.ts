import {Cache} from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private static readonly LOCATIONS_ENDPOINT = '/location-area/';

    private cache: Cache

    constructor() {
        this.cache = new Cache(1000 * 60 * 60)
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = pageURL ?
            pageURL :
            PokeAPI.baseURL + PokeAPI.LOCATIONS_ENDPOINT

        if (this.cache.get(url)) {
            console.log("Cache hit")
            return this.cache.get(url) as ShallowLocations;
        }

        const response = await fetch(url)

        this.validateResponse(response, PokeAPI.LOCATIONS_ENDPOINT);

        const result = await response.json()
        this.cache.add(url, result)

        return result
    }

    async fetchLocation(locationName: string): Promise<detailedLocation> {
        let url = PokeAPI.baseURL + PokeAPI.LOCATIONS_ENDPOINT + locationName;

        if (this.cache.get(url)) {
            console.log("Cache hit")
            return this.cache.get(url) as detailedLocation;
        }

        const response = await fetch(url)

        this.validateResponse(response, PokeAPI.LOCATIONS_ENDPOINT);

        const result = await response.json()
        this.cache.add(url, result)

        return result
    }

    private validateResponse(response: Response, endpoint: string): void {
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${endpoint}. Status: ${response.status}`);
        }
    }

}

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