import {State} from "../state";
import {DetailedPokemon} from "../pokeapi/types";

export async function commandCatch(state: State, pokemon: string) {
    if(!pokemon) {
        console.error("Pokemon name is required")
        return
    }

    console.log(`Throwing a Pokeball at ${pokemon}`)
    try {
        let pokemonData = await state.pokeAPI.fetchDetailedPokemon(pokemon)
        throwPokeball(pokemonData, state)
    } catch (error) {
        console.error(`Error fetching Pokemon: ${error}`)
    }
}

function throwPokeball(pokemonData: DetailedPokemon, state: State) {

    if(catchPokemon(pokemonData.base_experience)){
        console.log(`Caught ${pokemonData.name}`)
        state.catched[pokemonData.name] = pokemonData;
    } else {
        console.log(`${pokemonData.name} escaped!`)
    }

}

function catchPokemon(base_Experience: number): boolean {

    const catchChance = Math.random() * 1000;
    console.log(`Catch chance: ${catchChance} vs ${base_Experience}`)

    return catchChance > base_Experience;
}