import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { MovesSection } from "./style"

export const Moves = ({ movesList }) => {

    const moves = movesList.map(moves => moves.move.name)
    const { theme } = useContext(ThemeContext)

    return (
        <MovesSection theme={theme}>
            <h2>Moves</h2>
            <ul>
                {moves.map((move, index) => <li key={index}>{move}</li>)}
            </ul>
        </MovesSection>
    )
}