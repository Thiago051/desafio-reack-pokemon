import { useState, useEffect } from "react"

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

async function getPokemon(pokemon) {
    const response = await fetch(pokemon)
    return await response.json()
}


const Card = ({ url }) => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getPokemon(url)
            setPokemon(response)
        }
        fetchData()
    }, [])

    // const imgUrl = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img
                src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}
                alt={pokemon.name}
            />
        </div>
    )
}

export default Card