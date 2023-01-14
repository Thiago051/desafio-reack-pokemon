import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { MovesSection } from "./style"

export const Moves = ({ moves }) => {

    const { theme } = useContext(ThemeContext)

    if (moves.length === 0) return

    return (
        <MovesSection theme={theme}>
            <h2>Moves</h2>
            <ul>
                {moves.map((move, index) => <li key={index}>{move}</li>)}
            </ul>
        </MovesSection>
    )
}