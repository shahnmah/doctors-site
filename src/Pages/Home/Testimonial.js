import React from 'react';
import peopleImg1 from '../../assets/images/people1.png'

const Testimonial = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl p-9">
            <div className="card-body">
                <p className='leading-5'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className="card-actions items-center justify-around mt-9">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={peopleImg1} />
                            </div>
                        </div>
                    <div>
                    <h5 className='text-xl font-bold text-accent'>Winson Herry</h5>
                    <p>California</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;