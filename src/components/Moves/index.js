import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { MovesSection, Title, List, Item } from "./stye"

export const Moves = ({ movesList }) => {

    const moves = movesList.map(moves => moves.move.name)
    const { theme } = useContext(ThemeContext)
    
    return (
        <MovesSection>
            <Title style={{ color: theme.color }}>Moves</Title>
            <List>
                {moves.map((move, index) => <Item key={index}>{move}</Item>)}
            </List>
        </MovesSection>
    )
}