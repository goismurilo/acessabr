import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';

import { FilterContext } from '../../contexts/FilterContext';
import { LocationContext } from '../../contexts/LocationContext';
import Pills from '../../components/Pills';

import imageDestack from '../../images/Imagem-destaque.png';
import './styles.scss';

const PLACES = [
    'Praça',
    'Parque',
    'Igreja',
    'Restaurante',
    'Farmácia',
    'Loja',
    'Mercado',
    'Lazer',
    'Outros',
    'Todos',
]

const Home = () => {
    const { city, state } = useParams();

    const { setCity, setState } = useContext(LocationContext);
    const { filteredPlace, setFilteredPlace } = useContext(FilterContext);

    const handlefilteredPlace = (item) => {
        if (item !== filteredPlace) {
            setFilteredPlace(item);
            return;
        }

        if (item === filteredPlace) {
            setFilteredPlace('');
        }
        console.log(item);
    }

    useEffect(() => {
        setCity(city);
        setState(state);
    }, [city, setCity, setState, state]);

    return (
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{city} para todos</h1>
                <div className="home__image home__image--destack hide-desktop">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
                <p className="home__text">
                    Nossa missão é facilitar o encontro entre lugares inclusivos e   pessoas que buscam alternativas culturais para sair de casa, com a mobilidade que todo cidadão precisa.
                </p>
                <p className="home__text">
                    Checamos 10 itens essenciais de acessibilidade para pessoas com deficiência em diversos pontos da cidade.
                </p>
                <div className="home__pills">
                    {
                        PLACES.map((item) => (
                            <Pills
                                local={item}
                                selected={filteredPlace === item}
                                key={item}
                                onClick={() => handlefilteredPlace(item)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="home__col">
                <div className="home__image home__image--destack hide-mobile">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
            </div>
        </main>
    )
}

export default Home;