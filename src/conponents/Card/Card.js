import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/themeToggler"
import { pokemonAPI } from "../../services/api"
import { PokemonCard, PokemonName, PokemonImg } from "./style"

export const selectImage = (response) => {
    let imageUrl = response.data.sprites.other['official-artwork']['front_default']
    if (imageUrl === null) imageUrl = response.data.sprites['front_default']
    if (imageUrl === null) imageUrl = response.data.sprites.other.home['front_default']
    if (imageUrl === null) imageUrl = response.data.sprites.versions['generation-viii']['icons']['front_default']
    return imageUrl
}

export const Card = ({ id }) => {

    const [pokemon, setPokemon] = useState({
        name: '',
        imageUrl: ''
    })

    const [animated, setAanimated] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl =
                animated ?
                    response.data.sprites.versions['generation-v']['black-white']['animated']['front_default']
                    :
                    response.data.sprites.other['dream_world']['front_default']

            setPokemon({
                name: name,
                imageUrl: imageUrl ?? selectImage(response)
            })
        }
        fetchData()
    }, [id, animated])

    const { theme } = useContext(ThemeContext)

    const setCardBorder = (color, width) => {
        let card = document.querySelector(`#card-${id}`).style
        card.borderColor = color
        card.borderWidth = width
    }

    const handleMouseOver = () => {
        setAanimated(true)
        setCardBorder('#f00', '5px')
    }

    const handleMouseOut = () => {
        setAanimated(false)
        setCardBorder(theme.border, '2px')
    }

    return (
        <PokemonCard id={`card-${id}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ borderColor: theme.border }} >

            <PokemonName style={{ color: theme.color }}>
                {pokemon.name}
            </PokemonName>
            <PokemonImg src={pokemon.imageUrl} alt={pokemon.name} />
        </PokemonCard>
    )
}