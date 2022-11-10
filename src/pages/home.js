import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SelectPokemonType } from '../components/SelectPokemonType';

export const Home = () => {
    return (
        <>
            <Header />
            <SelectPokemonType />
            <Footer />
        </>
    )
}