import {State} from "../state";

export async function commandExplore(state: State, area: string) {
    console.log("Explore Location...")
    try {
        let location = await state.pokeAPI.fetchLocation(area)

        location.pokemon_encounters.forEach(encounter => {
            console.log('\t- ' + encounter.pokemon.name)
        })
    } catch (error) {
        console.error(`Error exploring location: ${error}`)
    }
}