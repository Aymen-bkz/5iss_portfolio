import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio';
import SmartDevice from './pages/Smart device/Smart_device'
import Communication from './pages/Communication/Communication';

import Navbar from './components/navbar/navbar';
import Particles_compo from './components/background/background';
import Hackathon from './pages/Hackathon/Hackathon';
import Project from './pages/Project/Project';
import Middleware from './pages/Middleware/Middleware';
import BigData from './pages/BigData/BigData';
import Innovation from './pages/Innovation/Innovation';



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
                    <Route path='/communication' element={<Communication/>} />
                    <Route path='/hackathon' element={<Hackathon />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/middleware' element={<Middleware />} />
                    <Route path='/bigData' element={<BigData />} />
                    <Route path='/innovation' element={<Innovation />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;