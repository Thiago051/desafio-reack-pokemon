import { TypesSection, Title, List, Item } from "./styles";

const Types = ({ typesList }) => {
    return (
        <TypesSection>
            <Title>Types</Title>
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

export default Types