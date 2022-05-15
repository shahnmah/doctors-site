import React from 'react';
import appointmentImg from '../../assets/images/appointment.png'
import doctorSmallImg from '../../assets/images/doctor-small.png'
import Button from '../Shared/PrimaryButton';


const Appointment = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-5 mt-52 rounded-none" style={{ backgroundImage: `url(${appointmentImg})`, height: '533px', overflow:'inherit' }}>
            <figure><img style={{ height: '636px', width: '606.84px', position:'absolute', bottom:'0' }} src={doctorSmallImg} /></figure>
            <div class="card-body justify-center">
                <div>
                    <h5 className='text-xl font-bold text-primary'>Appointment</h5>
                    <h3 className='text-4xl text-white font-semibold my-5'>Services We Provide</h3>
                    <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div class="card-actions justify-start mt-11">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;