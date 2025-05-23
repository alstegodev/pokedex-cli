import {State} from "../state";

export async function commandExplore(state: State, area: string) {
    if(!area) {
        console.error("Area name is required")
        return
    }

    console.log("Explore Location...")
    try {
        let location = await state.pokeAPI.fetchDetailedLocation(area)

        location.pokemon_encounters.forEach(encounter => {
            console.log('\t- ' + encounter.pokemon.name)
        })
    } catch (error) {
        console.error(`Error exploring location: ${error}`)
    }
}