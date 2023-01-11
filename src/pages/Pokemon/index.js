import { pokemonAPI } from "../../services/api"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { GoBackLink } from "../../components/GoBackLink"
import { Moves } from "../../components/Moves"
import { Abilities } from "../../components/Abilities"
import { Type } from "../../components/Type"
import { ThemeContext } from "../../contexts/ThemeContext"
import { selectImage } from "../../utils/selectImage"
import { Container, Main } from "./style"


export const Pokemon = () => {

    const { id } = useParams()
    const navigate = useNavigate()

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
                .catch(error => {
                    if (error.response.status === 404) {
                        navigate(`/pokemon/${id}/NotFound`)
                    }
                })

            const name = response.data.name
            const imageUrl = response.data.sprites.other['dream_world']['front_default'] ?? selectImage(response)
            const moves = response.data.moves.map(moves => moves.move.name)
            const abilities = response.data.abilities.map(abilities => abilities.ability.name)
            const types = response.data.types.map(types => types.type.name)

            setPokemon({
                imageUrl: imageUrl,
                name: name,
                moves: moves,
                abilities: abilities,
                types: types
            })
        }
        fetchData()
    }, [id, navigate])

    const { theme } = useContext(ThemeContext)

    return (
        <Container onLoad={window.scroll({ top: 0 })}>
            <GoBackLink />
            <Main theme={theme}>
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.imageUrl} alt={pokemon.name} />
                </div>
                <Moves moves={pokemon.moves} />
                <Abilities abilities={pokemon.abilities} />
                <Type types={pokemon.types} />
            </Main>
        </Container>
    )
}