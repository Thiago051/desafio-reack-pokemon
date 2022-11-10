import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { TypesSection, Title, List, Item } from "./styles";

export const Type = ({ typesList }) => {

    const types = typesList.map(types => types.type.name)
    const { theme } = useContext(ThemeContext)

    return (
        <TypesSection>
            <Title style={{ color: theme.color }}>Type</Title>
            <List>
                {types.map((type, index) => <Item key={index}>{type}</Item>)}
            </List>
        </TypesSection>
    )
}