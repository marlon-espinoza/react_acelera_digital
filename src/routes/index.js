import {Routes, Route} from 'react-router-dom';
import { TravelList } from '../components';
import Cart from '../pages/cart';
import Home from '../pages/home';

const ConfigRoutes = () => {
    return <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
}

export default ConfigRoutes;