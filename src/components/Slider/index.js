import React, { useContext, useEffect, useState } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FilterContext } from '../../contexts/FilterContext';

import Card from '../Card';
import api from '../../config/api';

import 'swiper/swiper-bundle.css';

SwiperCore.use(Pagination);

function Slider() {
    const { filteredPlace, setFilteredPlace } = useContext(FilterContext);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        console.log("result");
        const fetchPlaces = async () => {
            const result = await api.get(`/places?category_like=${filteredPlace ? filteredPlace : ''}`);

            console.log(result);

            if (result.status === 200) {
                setPlaces(result.data);
            }
        }

        fetchPlaces();
    }, [filteredPlace]);

    return (
        <Swiper slidesPerView={places.length > 1 ? 1 : places.length}
            breakpoints={{
                767: {
                    slidesPerView: places.length > 2 ? 2 : places.length
                },
                1024: {
                    slidesPerView: places.length > 4 ? 4 : places.length
                }
            }}
        >
            {
                places.map(item => (
                    <SwiperSlide key={item.id}>
                        <Card key={item.id} item={item} />
                    </SwiperSlide>
                ))}
        </Swiper>

    );
}

export default Slider;