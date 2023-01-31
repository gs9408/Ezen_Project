import React from 'react';
import MainSection1 from '../components/MainSection1';
import MainSection2 from '../components/MainSection2';
import MainSection3 from '../components/MainSection3';
import Contact from '../components/Contact';
import Map from '../components/Map';

const Main = () => {
    return (
        <div>
            <MainSection1 />
            <MainSection2 />
            <MainSection3 />
            <Contact />
            <Map />
        </div>
    );
};

export default Main;