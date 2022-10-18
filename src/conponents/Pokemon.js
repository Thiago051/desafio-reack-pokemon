import { pokemonAPI } from "../services/api"
import { useState, useEffect } from "react"
import Moves from "./Moves"
import Abilities from "./Abilities"
import Types from "./Types"
import { useParams } from 'react-router-dom'

const Pokemon = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({
        imageUrl: '',
        name: '',
        moves: [],
        abilities: [],
        types: []
    })

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl = response.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            const moves = response.data.moves
            const abilities = response.data.abilities
            const types = response.data.types
            setPokemon({
                imageUrl: imageUrl,
                name: name,
                moves: moves,
                abilities: abilities,
                types: types
            })
        }
        fetchData()
    }, [id])

    return (
        <>
            <h2>{id} - {pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            {/* <Card id={id} /> */}
            <Moves movesList={pokemon.moves} />
            <Abilities abilitiesList={pokemon.abilities}/>
            <Types typesList={pokemon.types} />
        </>
    )
}

export default Pokemon