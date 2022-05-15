import React from 'react';
import chairImg from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import Button from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage:`url(${bgImg})` }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chairImg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button/>
                </div>
            </div>
        </div>
    );
};

export default Banner;