import React from 'react';
import ReactDOM from 'react-dom';
import CuratorItem from './components/Curator';

import Header from './components/Header';
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
            <CuratorItem />
        </div>
    </div>,
    document.getElementById('root')
);