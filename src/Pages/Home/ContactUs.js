import React from 'react';
import appointmentImg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const ContactUs = () => {
    return (
        <div className='py-11' style={{ backgroundImage: `url(${appointmentImg})` }}>
            <div className='text-center mb-16'>
                <h5 className='text-xl font-bold text-primary'>Contact Us</h5>
                <h3 className='text-4xl text-white'>Stay connected with us</h3>
            </div>
            <div className='flex justify-center align-center'>
                <div>
                    <input type="text" placeholder="Email Address" class="input input-bordered input-lg w-full max-w-xs block" />
                    <input type="text" placeholder="Subject" class="input input-bordered input-lg w-full max-w-xs block my-5" />
                    <textarea class="textarea w-full" placeholder="Your Message"></textarea>
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;