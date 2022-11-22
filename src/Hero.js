import React, { Component } from 'react';
import './App.css'
import logo from './Fill 219.jpg'

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container'>
                <div className='card'>
                    <img src='./Rectangle 77.png' alt='Img-of-the-place' className='container-Image' />
                    <div className='data-container'>
                        <span>
                            <img src={logo} alt='logo-img' className='logo' />

                        </span>
                        <span>
                            JAPAN
                        </span>
                        <h1>MOUNT Fuji</h1>
                        <span>12 jan, 2021-24 jan,2021</span>
                        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

                    </div>

                </div>
            </div>
        );
    }
}

export default Hero;