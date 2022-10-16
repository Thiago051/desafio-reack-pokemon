// import { useState } from "react"
import Button from "./Button"
import Card from "./Card"


const PokemonsList = ({ limit }) => {

    
    const getIdList = () => {
        let ids = []
        for (let id = 1; id <= limit; id++) ids.push(id)
        return ids
    }

    const pokemonsId = getIdList()
    // var addMore = limit

    // const addPokemonsId = () => {
    //     addMore += limit
    //     let ids = []
    //     let lastId = idList.length
    //     for (let id = lastId + 1; id < addMore; id++) ids.push(id)
    //     idList = [...idList, ...ids]
    //     console.log('addmore', addMore)
    //     console.log('IDlist', idList.length)
    //     // console.log('>>>', idList.length)
    // }

    // const [pokemonsId, setPokemonsId] = useState(idList)
    // console.log('pokemons ID',pokemonsId)


    // useEffect(() => {
    //     function loadData() {
            
    //         setPokemonsId(idList)
    //     }
    //     loadData()
    // }, [])


    // console.log('>>> pokemonsId', pokemonsId)
    return (
        <>
            <ul>
                {
                    pokemonsId.map((id, index) =>
                        <li key={index}>
                            <Card id={id} />
                        </li>
                    )
                }
            </ul>
            <Button>Carregar Mais</Button>
        </>
    )
}

export default PokemonsList