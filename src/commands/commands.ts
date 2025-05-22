import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import {commandMap} from "./command_map.js";
import {commandMapB} from "./command_mapb.js";
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
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
    }
}