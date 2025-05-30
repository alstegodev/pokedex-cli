import {Cache} from "../pokecache.js";
import {DetailedLocation, DetailedPokemon, ShallowLocations} from "./types";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private static readonly LOCATIONS_ENDPOINT = '/location-area/';
    private static readonly POKEMON_ENDPOINT = '/pokemon/';

    private cache: Cache

    constructor() {
        this.cache = new Cache(1000 * 60 * 60)
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = pageURL ?
            pageURL :
            PokeAPI.baseURL + PokeAPI.LOCATIONS_ENDPOINT

        return this.fetchData(url)
    }

    async fetchDetailedLocation(locationName: string): Promise<DetailedLocation> {
        let url = PokeAPI.baseURL + PokeAPI.LOCATIONS_ENDPOINT + locationName;

        return this.fetchData(url)
    }

    async fetchDetailedPokemon(pokemonName: string): Promise<DetailedPokemon> {
        let url = PokeAPI.baseURL + PokeAPI.POKEMON_ENDPOINT + pokemonName;

        return this.fetchData(url)
    }

    private async fetchData<T>(url: string): Promise<T> {
        if (this.cache.get(url)) {
            console.log("Cache hit")
            return this.cache.get(url) as T;
        }

        const response = await fetch(url)

        this.validateResponse(response, url);

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

