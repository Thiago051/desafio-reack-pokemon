import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { SelectPokemonType } from '../components/SelectPokemonType/SelectPokemonType';

export const Home = () => {
    return (
        <>
            <Header />
            <SelectPokemonType />
            <Footer />
        </>
    )
}