import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import * as styled from "./stye"

export const Moves = ({ movesList }) => {

    const moves = movesList.map(moves => moves.move.name)
    const { theme } = useContext(ThemeContext)
    
    return (
        <styled.Section>
            <styled.Title style={{ color: theme.color }}>Moves</styled.Title>
            <styled.List>
                {moves.map((move, index) => <styled.Item key={index}>{move}</styled.Item>)}
            </styled.List>
        </styled.Section>
    )
}