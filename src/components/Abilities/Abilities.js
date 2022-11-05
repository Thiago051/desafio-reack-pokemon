import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonAPI } from "../../services/api"
import { AbilitiesSection, Title, Description, List, Item, AbilityName } from "./styles"

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
        <Description>{abilityText}</Description>
    )
}

export const Abilities = ({ abilitiesList }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <AbilitiesSection>
            <Title style={{ color: theme.color }}>Abilities</Title>
            <List>
                {
                    abilitiesList.map((abilities, index) =>
                        <Item key={index}>
                            <AbilityName>{abilities.ability.name}</AbilityName>
                            <AbilityDescription ability={abilities.ability.name} />
                        </Item>
                    )
                }
            </List>
        </AbilitiesSection>
    )
}