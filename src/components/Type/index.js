import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TypeSection } from "./styles";

export const Type = ({ typesList }) => {

    const types = typesList.map(types => types.type.name)
    const { theme } = useContext(ThemeContext)

    return (
        <TypeSection theme={theme}>
            <h2>Type</h2>
            <ul>
                {types.map((type, index) => <li key={index}>{type}</li>)}
            </ul>
        </TypeSection>
    )
}