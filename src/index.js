import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CuratorItem from './components/Curator';
import Footer from './components/Footer';

import Header from './components/Header';
import Places from './components/Places';
import Home from './pages/Home';
import Routes from './routes';

import './styles/global.scss'

ReactDOM.render(
    <div className="main__wrapper">
        <div className="main__container">
            <BrowserRouter>
                <Routes />
                <Places />
                <CuratorItem />
            </BrowserRouter>
        </div>
        <Footer />
    </div>,
    document.getElementById('root')
);