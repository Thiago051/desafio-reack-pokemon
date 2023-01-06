import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import { pokemonAPI } from "../../services/api"
import { AllPokemons } from "../../components/AllPokemons";
import { FilterByType } from "../../components/FilterByType"
import { Filter, Container } from "./style";

export const Home = () => {

    const [pokemonTypes, setPokemonTypes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getTypes()
            setPokemonTypes(response.data.results)
        }
        fetchData()
    }, [])

    const [type, setType] = useState('all')

    const filteredTypes = pokemonTypes
        .filter(type => type.name !== 'unknown' && type.name !== 'shadow')
        .map(type => type.name)
    filteredTypes.unshift('all')

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Filter theme={theme}>
                <p>Filter Pokemons By Type:</p>
                <select onChange={(event) => setType(event.target.value)}>
                    <option value={type} disabled={true}></option>
                    {
                        filteredTypes.map((type, index) =>
                            <option value={type} key={index}>{type}</option>
                        )
                    }
                </select>
            </Filter>

            <Container theme={theme}>
                {type === 'all' ? <AllPokemons /> : <FilterByType type={type} />}
            </Container>
        </>

    )
}