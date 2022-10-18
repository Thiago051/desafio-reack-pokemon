import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pokemon from '../conponents/Pokemon';
import DeckOfPokemons from '../conponents/DeckOfPokemons';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<DeckOfPokemons />} />
                <Route exact path='/pokemon/:id' element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }