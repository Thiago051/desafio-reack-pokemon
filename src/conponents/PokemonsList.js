import Card from "./Card"


const PokemonsList = ({ limit, offset }) => {


    const pokemonsId = []
    for (let id = offset + 1; id < limit; id++) pokemonsId.push(id)

    return (
        <div>
            {
                pokemonsId.map((id, index) =>
                    <div key={index}>
                        <Card id={id} />
                    </div>
                )
            }
        </div>
    )
}

export default PokemonsList