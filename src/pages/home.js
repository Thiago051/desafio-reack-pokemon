import { Header } from '../conponents/Header/Header';
import { Footer } from '../conponents/Footer/Footer';
import { SelectPokemonType } from '../conponents/SelectPokemonType/SelectPokemonType';

export const Home = () => {
    return (
        <>
            <Header />
            <SelectPokemonType />
            <Footer />
        </>
    )
}