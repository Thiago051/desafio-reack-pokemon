import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { selectImage } from "../../utils/selectImage"
import * as styled from "./style"

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
        <styled.Info id={`card-${id}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ borderColor: theme.border }} >
            <styled.Name style={{ color: theme.color }}>{pokemon.name}</styled.Name>
            <styled.Img src={pokemon.imageUrl} alt={pokemon.name} />
        </styled.Info>
    )
}