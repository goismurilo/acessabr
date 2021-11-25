import React from 'react';
import ReactDOM from 'react-dom';
import CuratorItem from './components/Curator';
import Footer from './components/Footer';

import Header from './components/Header';
import Slider from './components/Slider';
import Home from './pages/Home';

import './styles/global.scss'

const CONFIG = {
    city: 'Eunápolis',
    state: 'BA',
}

ReactDOM.render(
    <div className="main__wrapper">
        <div className="main__container">
            <Header city={CONFIG.city} state={CONFIG.state} />
            <Home city={CONFIG.city} />
            <Slider />
            <CuratorItem />
        </div>
        <Footer />
    </div>,
    document.getElementById('root')
);