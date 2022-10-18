import { useEffect, useState } from "react"
import { pokemonAPI } from "../../services/api"

const AbilityDescription = ({ ability }) => {

    const [abilityText, setAbilityText] = useState('')

    useEffect(() => {
        async function fetchData() {
            const response = await pokemonAPI.getAbilityText(ability)

            const text = response.data['effect_entries']
                .filter(effect => effect.language.name === 'en')[0]['short_effect']

            setAbilityText(text)
        }
        fetchData()
    }, [ability])

    return (
        <p>{abilityText}</p>
    )
}

const Abilities = ({ abilitiesList }) => {

    return (
        <div>
            <h3>Abilities</h3>
            <ul>
                {
                    abilitiesList.map((abilities, index) =>
                        <li key={index}>
                            <h4>{abilities.ability.name}</h4>
                            <AbilityDescription ability={abilities.ability.name} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}


export default Abilities