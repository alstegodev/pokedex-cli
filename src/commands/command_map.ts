import {State} from "../state";

export async function commandMap(state: State) {
    console.log("Fetching locations...")
    let locations = state.location.nextLocationsURL ?
        await state.pokeAPI.fetchLocations(state.location.nextLocationsURL) :
        await state.pokeAPI.fetchLocations()

    state.location.nextLocationsURL = locations.next;
    state.location.prevLocationsUrl = locations.previous;
    for (let location of locations.results) {
        console.log('\t',location.name)
    }

}