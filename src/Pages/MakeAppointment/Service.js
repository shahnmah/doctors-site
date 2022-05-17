import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h5 class="card-title text-xl text-secondary">{name}</h5>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-300'>No slot available</span>
                    }
                </p>
                <p>{slots.length} {(slots.length < 1)? 'space' : 'spaces'} Available</p>
                <div class="card-actions justify-center">
                    <label onClick={()=> setTreatment(service)} disabled={slots.length === 0}  for="booking-modal" class="btn btn-secondary text-white">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;