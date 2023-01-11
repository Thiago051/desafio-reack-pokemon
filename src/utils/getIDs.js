import {
    START_IDS_REGURLAR_POKEMONS, END_IDS_REGURLAR_POKEMONS,
    START_IDS_SPECIALS_POKEMONS, END_IDS_SPECIALS_POKEMONS
} from "../variables/variables"

export const getIDs = () => {
    let ids = []
    for (let i = START_IDS_REGURLAR_POKEMONS; i <= END_IDS_REGURLAR_POKEMONS; i++)
        ids.push(i)
    for (let i = START_IDS_SPECIALS_POKEMONS; i <= END_IDS_SPECIALS_POKEMONS; i++)
        ids.push(i)

    return ids
}