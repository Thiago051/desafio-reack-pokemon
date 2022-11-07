import axios from "axios";
import { baseUrl } from "../variables/variables";

const api = axios.create({ baseURL: baseUrl })

export const pokemonAPI = {
    getPokemon: (id) => api.get(`pokemon/${id}`),
    getAbilityText: (ability) => api.get(`ability/${ability}`),
    getPokemonsByType: (type) => api.get(`type/${type}`),
    getTypes: () => api.get('type')
}