import { useState, useEffect } from "react"
import { pokemonAPI } from "../../services/api"
import { PokemonCard, PokemonName, PokemonImg } from "./style"

const Card = ({ id }) => {

    const [pokemon, setPokemon] = useState({
        name: '',
        imageUrl: ''
    })

    const [animated, setAnimation] = useState(false)
    const handleMouseOver = () => setAnimation(true)
    const handleMouseOut = () => setAnimation(false)

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
        <PokemonCard animated={animated}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <PokemonName>{id} - {pokemon.name}</PokemonName>
            <PokemonImg src={pokemon.imageUrl} alt={pokemon.name} />
        </PokemonCard>
    )
}

export default Card