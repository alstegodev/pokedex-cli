import {State} from "../state";

export async function commandExit(state: State){
    console.log("Closing the Pokedex... Goodbye");
    state.rlInterface.close();
    process.exit(0);
}