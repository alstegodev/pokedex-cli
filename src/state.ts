import * as readline from "node:readline";
import {getCommands} from "./commands/commands.js";
import {PokeAPI} from "./pokeapi/pokeapi.js";
import {DetailedPokemon} from "./pokeapi/types";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
}

export type State = {
    rlInterface: readline.Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    location: {
        nextLocationsURL: string;
        prevLocationsUrl: string;
    };
    catched: Record<string, DetailedPokemon>
}

export function initState(): State {
    let rlInterface: readline.Interface = readline.createInterface(process.stdin, process.stdout)
    rlInterface.setPrompt("Pokedex > ")

    return {
        rlInterface,
        commands: getCommands(),
        pokeAPI: new PokeAPI(),
        location: {
            nextLocationsURL: "",
            prevLocationsUrl: "",
        },
        catched: {}
    }
}