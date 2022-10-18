import { useState } from "react"
import { Link } from 'react-router-dom'
import { initialPokemonsQuantity } from "../variables/variables"
import Button from "./Button"
import Card from "./Card"
// import ReactDOM from 'react-dom/client';


const PokemonsList = ({ limit }) => {

    const getIdList = () => {
        let ids = []
        for (let id = 1; id <= limit; id++) ids.push(id)
        return ids
    }
    const pokemonsId = getIdList()

    return (
        <>
            <ul>
                {
                    pokemonsId.map((id, index) =>
                        <li key={index}>
                            <Link to={`pokemon/${id}`}>
                                <Card id={id} />
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

const DeckOfPokemons = () => {

    const [limit, setLimit] = useState(initialPokemonsQuantity)

    // https://stackoverflow.com/questions/59198952/using-document-queryselector-in-react-should-i-use-refs-instead-how
    // const scroll = () => {
    //     const pokemonsList = ReactDOM.(document.querySelector('.pokemon-list'))
    //     pokemonsList.scrollBy(0,100);
    // }



    const handleClick = () => {
        setLimit(initialPokemonsQuantity + limit)
        // scroll()
    }

    return (
        <>
            <PokemonsList limit={limit} className="pokemon-list" />
            <Button onClick={handleClick}>Carregar Mais</Button>
        </>
    )
}

export default DeckOfPokemons