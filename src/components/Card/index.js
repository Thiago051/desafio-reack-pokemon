import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { selectImage } from "../../utils/selectImage"
import { Info, Loading } from "./style"

export const Card = ({ id }) => {

    const [pokemon, setPokemon] = useState({ name: '', imageUrl: '' })
    const [animated, setAanimated] = useState(false)
    const [loading, setLoading] = useState(true)

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
            setLoading(false)
        }
        fetchData()
    }, [id, animated])

    const { theme } = useContext(ThemeContext)

    if (loading) {
        return (
            <Loading theme={theme}><span></span></Loading>
        )
    }

    return (
        <Info
            theme={theme}
            onMouseOver={() => setAanimated(true)}
            onMouseOut={() => setAanimated(false)}>
            <h2>{pokemon.name}</h2>
            {
                pokemon.imageUrl === null ?
                    <h3>Image Not Found 😥</h3> : <img src={pokemon.imageUrl} alt={pokemon.name} />
            }
        </Info>
    )
}