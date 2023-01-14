import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { AbilitiesSection } from "./style"

const AbilityDescription = ({ ability }) => {

    const [abilityText, setAbilityText] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await pokemonAPI.getAbilityText(ability)
            const text = response.data['effect_entries']
                .filter(effect => effect.language.name === 'en')[0]['short_effect']

            setAbilityText(text)
        }
        fetchData()
    }, [ability])

    return <p>{abilityText}</p>
}

export const Abilities = ({ abilities }) => {

    const { theme } = useContext(ThemeContext)

    if (abilities.length === 0) return

    return (
        <AbilitiesSection>
            <h2 style={{ color: theme.color }}>Abilities</h2>
            <ul>
                {
                    abilities.map((ability, index) =>
                        <li key={index}>
                            <h3>{ability}</h3>
                            <AbilityDescription ability={ability} />
                        </li>
                    )
                }
            </ul>
        </AbilitiesSection>
    )
}