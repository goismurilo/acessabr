import React from 'react';

import './styles.scss';

import logoAcessaBR from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac.svg'

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBR} alt="Logo AcessaBR" />
                <span className="header__city">/ Eunápolis - BA</span>
            </div>
            <div className="header__logo--ebac">
                <span>Apoio:</span>
                <img src={logoEbac} alt="Logo EBAC" />
            </div>
        </header>
    )
}

export default Header;