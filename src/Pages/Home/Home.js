import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Care from './Care';
import ContactUs from './ContactUs';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <Care/>
            <Appointment/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;