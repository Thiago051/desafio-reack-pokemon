import { Header } from "../components/Header"
import { Pokemon } from "../components/Pokemon"
import { Footer } from "../components/Footer"
import { useParams } from "react-router-dom"

export const PokemonDetails = () => {

    const { id } = useParams()

    return (
        <>
            <Header />
            <Pokemon id={id} />
            <Footer />
        </>
    )
}