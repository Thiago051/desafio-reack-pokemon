import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import * as styled from "./styles";

export const Type = ({ typesList }) => {

    const types = typesList.map(types => types.type.name)
    const { theme } = useContext(ThemeContext)

    return (
        <styled.Section>
            <styled.Title style={{ color: theme.color }}>Type</styled.Title>
            <styled.List>
                {types.map((type, index) => <styled.Item key={index}>{type}</styled.Item>)}
            </styled.List>
        </styled.Section>
    )
}