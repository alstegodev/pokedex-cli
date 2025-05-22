import {getCommands} from "./commands/commands.js";
import {State} from "./state";


export function cleanInput(input: string): string[] {
    return input.trim().split(" ");
}

export function startREPL(state: State) {
    let rlInterface = state.rlInterface;

    rlInterface.prompt()

    rlInterface.on("line", async (line) => {
        let cleanStringArray = cleanInput(line);
        if(cleanStringArray.length === 0) {
            rlInterface.prompt()
        } else {

            let commandString = cleanStringArray[0];
            let cliCommand = getCommands()[commandString]
            if(cliCommand){
                await cliCommand.callback(state)
            } else {
                console.log("Command not found")
            }


            rlInterface.prompt()
        }
    })

}