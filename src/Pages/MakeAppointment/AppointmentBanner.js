import React, { useState } from 'react';
import chairImg from '../../assets/images/chair.png'
import bgImg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chairImg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;