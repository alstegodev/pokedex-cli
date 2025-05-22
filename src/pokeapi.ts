export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private static readonly LOCATIONS_ENDPOINT = '/location-area/';


    constructor() {
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        try {
            let url = pageURL ?
                pageURL :
                PokeAPI.baseURL + PokeAPI.LOCATIONS_ENDPOINT
            const response = await fetch(url)

            this.validateResponse(response, PokeAPI.LOCATIONS_ENDPOINT);

            return await response.json()
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