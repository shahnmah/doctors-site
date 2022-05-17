import React from 'react';
import InfoCart from './InfoCart';
import clockImg from '../../assets/icons/clock.svg'
import makerImg from '../../assets/icons/marker.svg'
import phoneImg from '../../assets/icons/phone.svg'

const Info = () => {
    const bgStyle1 ={
        background: 'linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)'
    }
    const bgStyle2 ={
        background: '#3A4256'
    }
   const title1 = 'Opening Hours';
   const title2 = 'Visit our location';
   const title3 = 'Contact us now';
   const text1 = 'Lorem Ipsum is simply dummy text of the pri';
   const text2 = 'Brooklyn, NY 10036, United States';
   const text3 = '+000 123 456789';
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart title={title1} text={text1} bgStyle={bgStyle1} img={clockImg}/>
            <InfoCart title={title2} text={text2} bgStyle={bgStyle2} img={makerImg}/>
            <InfoCart title={title3} text={text3} bgStyle={bgStyle1} img={phoneImg}/>
        </div>
    );
};

export default Info;