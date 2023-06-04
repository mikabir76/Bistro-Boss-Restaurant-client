import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallContact from '../../Components/CallContact/CallContact';
import Testimonial from '../Testimonial/Testimonial';
import Featured from '../Featured/Featured';
import Bistro from '../Bistro/Bistro';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner> 
            <Order></Order>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <CallContact></CallContact>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;