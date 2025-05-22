import {State} from "../state";


export async function commandHelp(state: State) {
    let commands = state.commands;
    console.log("Welcome to the Pokedex!")
    console.log("Usage:")
    for (const command in commands) {
        console.log(`\t${commands[command].name} - ${commands[command].description}`)
    }
}