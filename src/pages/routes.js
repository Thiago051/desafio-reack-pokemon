import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home';
import PokemonDetails from './details';
import Filter from './filter';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<PokemonDetails />} />
                <Route exact path='/filter' element={<Filter />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }