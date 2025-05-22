import {Cache} from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private static readonly LOCATIONS_ENDPOINT = '/location-area/';

    private cache: Cache

    constructor() {
        this.cache = new Cache(10000)
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = pageURL ?
            pageURL :
            PokeAPI.baseURL + PokeAPI.LOCATIONS_ENDPOINT

        if (this.cache.get(url)) {
            console.log("Cache hit")
            return this.cache.get(url) as ShallowLocations;
        }

        try {
            const response = await fetch(url)

            this.validateResponse(response, PokeAPI.LOCATIONS_ENDPOINT);

            const result = await response.json()
            this.cache.add(url, result)

            return result
        } catch (error) {
            console.error(`Error fetching locations: ${error}`)
            return Promise.reject(error)
        }
    }

    private validateResponse(response: Response, endpoint: string): void {
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${endpoint}. Status: ${response.status}`);
        }
    }


    // async fetchLocation(locationName: string): Promise<Location> {}

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