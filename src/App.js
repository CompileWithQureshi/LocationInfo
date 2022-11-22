import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import './App.css'

const App = () => {
    return (
        <div className='overflow'>
            <NavBar />
            <Hero />
            <Hero />
            <Hero />
            <Hero />
        </div>

    )
}
export default App