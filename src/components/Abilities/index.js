import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import * as styled from "./style"

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

    return <styled.Description>{abilityText}</styled.Description>
}

export const Abilities = ({ abilitiesList }) => {

    const abilities = abilitiesList.map(abilities => abilities.ability.name)
    const { theme } = useContext(ThemeContext)

    return (
        <styled.Section>
            <styled.Title style={{ color: theme.color }}>Abilities</styled.Title>
            <styled.List>
                {
                    abilities.map((ability, index) =>
                        <styled.Item key={index}>
                            <styled.Ability>{ability}</styled.Ability>
                            <AbilityDescription ability={ability} />
                        </styled.Item>
                    )
                }
            </styled.List>
        </styled.Section>
    )
}