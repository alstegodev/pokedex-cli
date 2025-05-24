import {State} from "../state";

export async function commandPokedex(state: State) {
    console.log('Your Pokedex: ')
    for(const pokemon in state.catched){
        console.log(' - ', pokemon);
    }
}