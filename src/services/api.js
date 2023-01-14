import axios from "axios";
import { BASE_URL } from "../variables/variables";

const api = axios.create({ baseURL: BASE_URL })

export const pokemonAPI = {
    getPokemons: (limit) => api.get(`pokemon?limit=${limit}&offset=0`),
    getPokemon: (name) => api.get(`pokemon/${name}`),
    getAbilityText: (ability) => api.get(`ability/${ability}`),
    getPokemonsByType: (type) => api.get(`type/${type}`),
    getTypes: () => api.get('type')
}