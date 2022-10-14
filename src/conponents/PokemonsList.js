import { useState, useEffect } from "react"
import Card from "./Card"

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

async function getPokemon() {
    const response = await fetch(baseUrl)
    return await response.json()
}


const PokemonsList = () => {

    const [pokemons, setPokemon] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemon()
            setPokemon(response.results)
        }
        fetchData()
    }, [])

    console.log(pokemons)
    return (
        <div>
            {
                pokemons.map((pokemon, index) =>
                    <div key={index}>
                        <Card {...pokemon}/>
                    </div>
                )
            }

            {/* <img
                src={pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']}
                alt={pokemon.name}
            /> */}
        </div>
    )
}

export default PokemonsList