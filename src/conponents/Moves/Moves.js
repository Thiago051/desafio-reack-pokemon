import { MovesSection, Title, List, Item } from "./stye"

const Moves = ({ movesList }) => {

    return (
        <MovesSection>
            <Title>Moves</Title>
            <List>
                {
                    movesList.map((moves, index) =>
                        <Item key={index}>
                            {moves.move.name ?? 'cade o nome do movimento?'}
                        </Item>
                    )
                }
            </List>
        </MovesSection>
    )
}

export default Moves