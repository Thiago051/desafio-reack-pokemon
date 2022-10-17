import axios from "axios";
import { baseUrl } from "../variables/variables";

const api = axios.create({
    baseURL: baseUrl
})

const pokemonAPI = {
    getPokemon(id) {
        return api.get(`pokemon/${id}`)
    },
    getAbilityText(ability) {
        return api.get(`ability/${ability}`)
    }
}

export { pokemonAPI }