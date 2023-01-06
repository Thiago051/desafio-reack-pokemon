import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import { Pokemon } from './Pokemon';
import { Error } from './Error'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<Pokemon />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}