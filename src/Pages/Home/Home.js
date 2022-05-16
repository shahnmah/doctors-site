import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Care from './Care';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Care/>
            <Appointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;