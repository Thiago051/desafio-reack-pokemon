import { pokemonAPI } from "../../services/api"
import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import GoBackLink from "../GoBackLink/GoBackLink"
import Moves from "../Moves/Moves"
import Abilities from "../Abilities/Abilities"
import Types from "../Type/Types"
import { DetailsMain, Info, PokemonName, PokemonImg, } from "./style"
import { ThemeContext } from "../../contexts/themeToggler"


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
            const imageUrl = response.data['sprites']['other']['dream_world']['front_default']
            //response.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
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

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <GoBackLink />

            <DetailsMain style={{ backgroundColor: theme.background }}>
                
                <Info style={{ borderColor: theme.border }}>
                    <PokemonName style={{ color: theme.color }}>
                        {pokemon.name}
                    </PokemonName>
                    <PokemonImg src={pokemon.imageUrl} alt={pokemon.name} />
                </Info>
                
                <Moves movesList={pokemon.moves} />
                <Abilities abilitiesList={pokemon.abilities} />
                <Types typesList={pokemon.types} />

            </DetailsMain>
        </>
    )
}

export default Pokemon