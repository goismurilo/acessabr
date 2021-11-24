import React from 'react';

import './styles.scss';
import curatorPhoto from '../../images/curador.jpg';

function CuratorItem() {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto do curador da página" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Murilo Gois</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Desenvolvedor Full Stack, atualmente na Resolve Consultoria e aluno do Instituto Federal da Bahia.</p>
            </div>
        </div>
    );
}

export default CuratorItem;