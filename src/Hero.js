import React from 'react';
import './App.css'
import logo from './Fill 219.jpg'



const Hero = (props) => {
    const { img, country, city, date, info } = props
    return (
        <div className='container'>
            <div className='card'>
                <img src={img} alt='Img-of-the-place' className='container-Image' />
                <div className='data-container'>
                    <span>
                        <img src={logo} alt='logo-img' className='logo' />

                    </span>
                    <span>
                        <b>{country}</b>
                    </span><br />
                    <h1><b>{city}</b></h1><br />
                    <span><b>{date}</b></span><br /><br />
                    <p className='paragraf'>{info}</p><br />

                </div>

            </div>
        </div>
    );
}



export default Hero;