import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
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