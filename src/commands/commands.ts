import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import {commandMap} from "./command_map.js";
import {commandMapB} from "./command_mapb.js";
import {commandExplore} from "./command_explore.js";
import {commandCatch} from "./command_catch.js";
import {CLICommand} from "../state";

export function getCommands(): Record<string, CLICommand> {
    return {
        help: {
            name: "help",
            description: "Show help",
            callback: (state) => commandHelp(state),
        },
        map: {
            name: "map",
            description: "Displays the name of 20 locations, consecutive calls display the next 20 locations",
            callback: (state) => commandMap(state),
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous 20 location names",
            callback: (state) => commandMapB(state),
        },
        explore: {
            name: "explore",
            description: `Explore the Pokémon of one Area. Usage: explore <area name>`,
            callback: (state, ...args: string[]) => commandExplore(state, args[0]),
        },
        catch: {
            name: "catch",
            description: "Try to catch a Pokemon. Usage: catch <area name>",
            callback: (state, ...args: string[]) => commandCatch(state, args[0]),
        },
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
    }
}