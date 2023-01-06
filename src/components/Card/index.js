import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { selectImage } from "../../utils/selectImage"
import { Info } from "./style"

export const Card = ({ id }) => {

    const [pokemon, setPokemon] = useState({
        name: '',
        imageUrl: ''
    })

    const [animated, setAanimated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl = animated ?
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

    return (
        <Info
            theme={theme}
            onMouseOver={() => setAanimated(true)}
            onMouseOut={() => setAanimated(false)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
        </Info>
    )
}