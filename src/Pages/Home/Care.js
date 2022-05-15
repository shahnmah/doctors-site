import React from 'react';
import treatmentImg from '../../assets/images/treatment.png'
import Button from '../Shared/PrimaryButton';

const Care = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-5 mt-36">
            <figure><img className='rounded-lg' style={{ height: '576px', width: '458px' }} height={'576px'} src={treatmentImg} /></figure>
            <div className="card-body justify-center">
                <div>
                    <h2 className="card-title text-5xl mb-6 text-accent">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start mt-11">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;