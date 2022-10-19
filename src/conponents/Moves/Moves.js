const Moves = ({ movesList }) => {

    return (
        <div>
            <h2>Moves</h2>
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