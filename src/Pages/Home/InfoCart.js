import React from 'react';

const InfoCart = ({img, bgStyle, title, text}) => {
    return (
        <div style={bgStyle} class="card lg:card-side shadow-xl text-white px-5">
            <figure><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default InfoCart;