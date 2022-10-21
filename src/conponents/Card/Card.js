import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/themeToggler"
import { pokemonAPI } from "../../services/api"
import { PokemonCard, PokemonName, PokemonImg } from "./style"

const Card = ({ id }) => {

    const [animated, setAanimated] = useState(false)
    
    const [pokemon, setPokemon] = useState({
        name: '',
        imageUrl: ''
    })

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl =
                animated ?
                    response.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                    :
                    response.data['sprites']['versions']['generation-v']['black-white']['front_default']

            setPokemon({
                name: name,
                imageUrl: imageUrl
            })
        }
        fetchData()
    }, [id, animated])

    const { theme } = useContext(ThemeContext)
    
    const  card = document.querySelector(`#card-${id}`)
    
    const setCardBorder = (color, width) => {
        card.style['border-color'] = color
        card.style['border-width'] = width
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
            animated={animated}
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

export default Card