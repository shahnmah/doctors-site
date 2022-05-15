import React from 'react';
import Testimonial from './Testimonial';
import quoteImg from '../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <div className='mt-20 mb-36'>
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-xl font-bold text-primary'>Appointment</h5>
                    <h3 className='text-4xl text-accent'>Services We Provide</h3>
                </div>
                <div>
                    <img style={{ width: '192px', height: '156px' }} src={quoteImg} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </div>
    );
};

export default Testimonials;