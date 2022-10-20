import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/themeToggler"
import { pokemonAPI } from "../../services/api"
import { PokemonCard, PokemonName, PokemonImg } from "./style"

const Card = ({ id }) => {

    const [animated, setAanimated] = useState(false)
    const { theme } = useContext(ThemeContext)

    const handleMouseOver = () => {
        let card = document.querySelector(`.card-${id}`)
        card.style['border-color'] = '#f00'
        setAanimated(true)
    }

    const handleMouseOut = () => {
        let card = document.querySelector(`.card-${id}`)
        card.style['border-color'] = theme.border
        setAanimated(false)
    }
    
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


    return (
        <PokemonCard className={`card-${id}`} animated={animated}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ borderColor: theme.border }} > {/*borderColor: theme.border */}
            <PokemonName style={{ color: theme.color }}>
                {id} - {pokemon.name}
            </PokemonName>
            <PokemonImg src={pokemon.imageUrl} alt={pokemon.name} />
        </PokemonCard>
    )
}

export default Card