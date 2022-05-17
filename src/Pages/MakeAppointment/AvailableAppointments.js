import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='py-10'>
            <h5 className='text-2xl text-secondary text-center'>Available Services on {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} 
                        setTreatment={setTreatment}/>)
                }
            </div>
            <div>
                {
                    treatment && <BookingModal date={date} treatment={treatment} 
                    setTreatment={setTreatment}/>
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;