import {State} from "../state";

export async function commandMapB(state: State) {
    console.log("Fetching locations...")

    try {
        let locations = state.location.prevLocationsUrl ?
            await state.pokeAPI.fetchLocations(state.location.prevLocationsUrl) :
            await state.pokeAPI.fetchLocations()

        state.location.prevLocationsUrl = locations.previous;
        state.location.nextLocationsURL = locations.next;
        for (let location of locations.results) {
            console.log('\t',location.name)
        }
    } catch (error) {
        console.error(`Error fetching locations: ${error}`)
    }



}