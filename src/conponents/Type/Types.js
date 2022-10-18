const Types = ({ typesList }) => {
    return (
        <div>
            <h3>Types</h3>
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