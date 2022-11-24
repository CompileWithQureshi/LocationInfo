import React from 'react';
import './App.css'
import logo from './Fill 219.jpg'



const Hero = (props) => {
    return (
        <div className='container'>
            <div className='card'>
                <img src={props.img} alt='Img-of-the-place' className='container-Image' />
                <div className='data-container'>
                    <span>
                        <img src={logo} alt='logo-img' className='logo' />

                    </span>
                    <span>
                        <b>{props.country}</b>
                    </span><br />
                    <h1><b>{props.city}</b></h1><br />
                    <span><b>{props.date}</b></span><br /><br />
                    <p className='paragraf'>{props.info}</p><br />

                </div>

            </div>
        </div>
    );
}



export default Hero;