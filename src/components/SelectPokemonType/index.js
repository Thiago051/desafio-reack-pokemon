import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { pokemonAPI } from "../../services/api"
import { AllPokemons } from "../AllPokemons"
import { FilterByType } from "../FilterByType"
import { TypeFilter, SelectType } from "./style";

export const SelectPokemonType = () => {

    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getTypes()
            setPokemonTypes(response.data.results)
        }
        fetchData()
    }, [])

    const [type, setType] = useState('all types')

    const handleOptionChange = (event) => setType(event.target.value)

    const filteredTypes = pokemonTypes
        .filter(type => type.name !== 'unknown' && type.name !== 'shadow')
        .map(type => type.name)
    filteredTypes.unshift('all types')

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <TypeFilter style={{ backgroundColor: theme.background, color: theme.color }}>
                Filter Pokemons By Type: {" "}
                <SelectType onChange={handleOptionChange}>
                    <option value={type} disabled={true}></option>
                    {
                        filteredTypes.map((type, index) =>
                            <option value={type} key={index}>{type}</option>
                        )
                    }
                </SelectType>
            </TypeFilter>

            <div style={{ minHeight: '1080px', backgroundColor: theme.background }}>
                {type === 'all types' ? <AllPokemons /> : <FilterByType type={type} />}
            </div>
        </>

    )
}