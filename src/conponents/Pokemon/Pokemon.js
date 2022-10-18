import { pokemonAPI } from "../../services/api"
import { useState, useEffect } from "react"
import Moves from "../Moves/Moves"
import Abilities from "../Abilities/Abilities"
import Types from "../Type/Types"
import Card from "../Card/Card"
import { useParams, Link } from 'react-router-dom'


const Pokemon = () => {

    const { id } = useParams()

    const [pokemon, setPokemon] = useState({
        imageUrl: '',
        name: '',
        moves: [],
        abilities: [],
        types: []
    })

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getPokemon(id)
            const name = response.data.name
            const imageUrl = response.data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
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

    return (
        <>
            <Link to={'/'}>Voltar para a Lista de Pokemons</Link>
            {/* <h2>{id} - {pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name} /> */}
            <Card id={id} animated={true}/>
            <Moves movesList={pokemon.moves} />
            <Abilities abilitiesList={pokemon.abilities}/>
            <Types typesList={pokemon.types} />
        </>
    )
}

export default Pokemon