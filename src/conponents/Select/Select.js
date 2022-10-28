import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/themeToggler";
import { pokemonAPI } from "../../services/api"
import DeckOfPokemons from "../DeckOfPokemons/DeckOfPokemons"
import FilterByType from "../FilterByType/FilterByType"

import { TypeFilter, SelectType } from "./style";

const Select = () => {

    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getTypes()
            setPokemonTypes(response.data.results)
        }
        fetchData()
    }, [])

    const [type, setType] = useState('all')

    const handleOptionChange = (event) => {
        const { target } = event
        setType(target.value)
    }

    const filteredTypes = pokemonTypes.filter(type => type.name !== 'unknown' && type.name !== 'shadow')

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <TypeFilter style={{ backgroundColor: theme.background, color: theme.color }}>

                Filter Pokemons By Type: {" "}
                <SelectType onChange={handleOptionChange}>
                    <option value='all' >all types</option>
                    {
                        filteredTypes.map((type, index) =>
                            <option value={type.name} key={index}>{type.name}</option>
                        )
                    }
                </SelectType>

            </TypeFilter>

            <div style={{ minHeight: '1080px', backgroundColor: theme.background }}>
                {type === 'all' ? <DeckOfPokemons /> : <FilterByType type={type} />}
            </div>
        </>


    )
}

export default Select