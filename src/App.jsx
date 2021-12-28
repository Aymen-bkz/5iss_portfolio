import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio';
import SmartDevice from './pages/Smart device/Smart_device'

import Navbar from './components/navbar/navbar';
import Particles_compo from './components/background/background';



function App() {
    return (
        <div className='App'>
            <Particles_compo />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/portfolio' element={<Portfolio/>} />
                    <Route path='/smartDevice' element={<SmartDevice/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;