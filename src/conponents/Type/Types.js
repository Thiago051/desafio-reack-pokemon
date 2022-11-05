import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeToggler";
import { TypesSection, Title, List, Item } from "./styles";

const Types = ({ typesList }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <TypesSection>
            <Title style={{ color: theme.color }}>Type</Title>
            <List>
                {
                    typesList.map((types, index) =>
                        <Item key={index}>
                            {types.type.name}
                        </Item>
                    )
                }
            </List>
        </TypesSection>
    )
}

export { Types }