import axios from "axios";
import { baseUrl } from "../variables/variables";

const api = axios.create({
    baseURL: baseUrl
})

export const pokemonAPI = {
    getPokemon(id) {
        return api.get(`pokemon/${id}`)
    },
    getAbilityText(ability) {
        return api.get(`ability/${ability}`)
    },
    getPokemonsByType(type) {
        return api.get(`type/${type}`)
    },
    getTypes() {
        return api.get('type')
    }
}