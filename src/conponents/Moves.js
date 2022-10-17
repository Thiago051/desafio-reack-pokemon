const Moves = ({ movesList }) => {

    return (
        <div>
            <h3>Moves</h3>
            <ul>
                {
                    movesList.map((moves, index) =>
                        <li key={index}>
                            {moves.move.name ?? 'cade o nome do movimento?'}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Moves