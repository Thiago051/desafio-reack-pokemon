import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TypeSection } from "./styles";

export const Type = ({ types }) => {

    const { theme } = useContext(ThemeContext)

    if(types.length === 0) return

    return (
        <TypeSection theme={theme}>
            <h2>Type</h2>
            <ul>
                {types.map((type, index) => <li key={index}>{type}</li>)}
            </ul>
        </TypeSection>
    )
}