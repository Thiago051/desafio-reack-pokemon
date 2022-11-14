import { pokemonAPI } from "../../services/api"
import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import { GoBackLink } from "../GoBackLink"
import { Moves } from "../Moves"
import { Abilities } from "../Abilities"
import { Type } from "../Type"
import { ThemeContext } from "../../contexts/ThemeContext"
import { selectImage } from "../../utils/selectImage"
import * as styled from "./style"

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
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl = response.data.sprites.other['dream_world']['front_default'] ?? selectImage(response)
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
            <styled.Main style={{ backgroundColor: theme.background }}>
                <styled.Info style={{ borderColor: theme.border }}>
                    <styled.Name style={{ color: theme.color }}>
                        {pokemon.name}
                    </styled.Name>
                    <styled.Img src={pokemon.imageUrl} alt={pokemon.name} />
                </styled.Info>
                <Moves movesList={pokemon.moves} />
                <Abilities abilitiesList={pokemon.abilities} />
                <Type typesList={pokemon.types} />
            </styled.Main>
        </>
    )
}