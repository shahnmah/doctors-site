import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault()
        const slot = event.target.slot.value;
        const name  = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        console.log(slot, name, email, phone)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }    
                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        <input type="phone" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="Submit" class="input input-bordered bg-accent text-white w-full max-w-xs uppercase" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;