import {State} from "../state";

export async function commandInspect(state: State, pokemonName: string) {
    if (!pokemonName) {
        console.error("Pokemon name is required")
        return
    }

    const pokemonStats = state.catched[pokemonName]
    if (pokemonStats) {
        console.log(`Name: ${pokemonName}\nHeight: ${pokemonStats.height}\nWeight: ${pokemonStats.weight}`)
        console.log(`Stats: `)
        pokemonStats.stats.forEach(stat => {
            console.log(` - ${stat.stat.name}: ${stat.base_stat}`)
        })
        console.log(`Types: `)
        pokemonStats.types.forEach(type => {
            console.log(` - ${type.type.name}`)
        })
    } else {
        console.log("You have not caught that Pokemon yet")
    }
}