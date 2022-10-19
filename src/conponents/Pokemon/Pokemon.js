import { pokemonAPI } from "../../services/api"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import GoBackLink from "../GoBackLink/GoBackLink"
import Moves from "../Moves/Moves"
import Abilities from "../Abilities/Abilities"
import Types from "../Type/Types"
import { DetailsMain, PokemonName, PokemonImg, } from "./style"


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
            <GoBackLink />
            <DetailsMain>
                <PokemonName>{pokemon.name}</PokemonName>
                <PokemonImg src={pokemon.imageUrl} alt={pokemon.name} />
                <Moves movesList={pokemon.moves} />
                <Abilities abilitiesList={pokemon.abilities} />
                <Types typesList={pokemon.types} />

            </DetailsMain>
        </>
    )
}

export default Pokemon