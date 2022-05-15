import React from 'react';
import Service from './Service';
import cavityImg from '../../assets/images/cavity.png'
import fluorideImg from '../../assets/images/fluoride.png'
import whiteningImg from '../../assets/images/whitening.png'

const Services = () => {
    const title1 = 'Fluoride Treatment';
    const title2 = 'Cavity Filling';
    const title3 = 'Teeth Whitening';
    const text1 = 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the';
    const text2 = 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the';
    const text3 = 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the';
    return (
        <div className='mt-24'>
            <div className='text-center mb-16'>
                <h5 className='text-xl font-bold text-primary'>OUR SERVICES</h5>
                <h3 className='text-4xl text-accent'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service title={title1} text={text1} img={fluorideImg} />
                <Service title={title2} text={text2} img={cavityImg} />
                <Service title={title3} text={text3} img={whiteningImg} />
            </div>
        </div>
    );
};

export default Services;