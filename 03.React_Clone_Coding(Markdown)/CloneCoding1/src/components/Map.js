import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/img/map.jpeg';

const MapContainer = styled.div`
    max-width: 1500px;
    margin: auto;
    img {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
`

const Map = () => {
    return (
        <MapContainer>
            <img src={MapImg} />
        </MapContainer>
    );
};

export default Map;
