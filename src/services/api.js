import axios from "axios";
import { baseUrl } from "../variables/variables";

const api = axios.create({
    baseURL: baseUrl
})

const pokemonAPI = {
    getPokemon(pokemon) {
        return api.get(`pokemon/${pokemon}`)
    },
    getPokemonList(limit, offset) {
        console.log('getPokemonList()')
        return api.get(`pokemon?limit=${limit}&offset=${offset}`)
    }
}

export { pokemonAPI }