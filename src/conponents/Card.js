import { useState, useEffect } from "react"
import { pokemonAPI } from "../services/api"

const Card = ({ id }) => {

    const [pokemon, setPokemon] = useState({ 
        name: '',
        imageUrl: ''
    })

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl = response.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

            setPokemon({ 
                name:  name,
                imageUrl: imageUrl
            })
        }
        fetchData()
    }, [id])

    console.log(pokemon.name)


    return (
        <>
            <h2>{id} - {pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name}/>
        </>
    )
}

export default Card