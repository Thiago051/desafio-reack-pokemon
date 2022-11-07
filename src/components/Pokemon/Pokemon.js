import { pokemonAPI } from "../../services/api"
import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { GoBackLink } from "../GoBackLink/GoBackLink"
import { Moves } from "../Moves/Moves"
import { Abilities } from "../Abilities/Abilities"
import { Type } from "../Type/Type"
import { DetailsMain, Info, PokemonName, PokemonImg, } from "./style"
import { ThemeContext } from "../../contexts/ThemeContext"
import { selectImage } from "../Card/Card"

export const Pokemon = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({
        name: '',
        imageUrl: '',
        moves: [],
        abilities: [],
        types: []
    })

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl = response.data.sprites.other['dream_world']['front_default']
            const moves = response.data.moves
            const abilities = response.data.abilities
            const types = response.data.types

            setPokemon({
                imageUrl: imageUrl ?? selectImage(response),
                name: name,
                moves: moves,
                abilities: abilities,
                types: types
            })
        }
        fetchData()
    }, [id])

    const { theme } = useContext(ThemeContext)

    window.scrollTo({ top: 0, behavior: 'auto' })

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
                <Type typesList={pokemon.types} />
            </DetailsMain>
        </>
    )
}