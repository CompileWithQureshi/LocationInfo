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
                        {props.country}
                    </span><br />
                    <h1>{props.city}</h1><br />
                    <span>{props.date}</span><br /><br />
                    <p>{props.info}</p><br />

                </div>

            </div>
        </div>
    );
}



export default Hero;