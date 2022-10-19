const Types = ({ typesList }) => {
    return (
        <div>
            <h2>Types</h2>
            <ul>
                {
                    typesList.map((types, index) =>
                        <li key={index}>
                            {types.type.name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Types