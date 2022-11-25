import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import './App.css'
import data from './data'

const App = () => {
    const cards = data.map(item => {
        return (
            <Hero
                key={item.id}
                {...item}
            />

        )
    })
    return (
        <div className='overflow'>
            <NavBar />
            {cards}


        </div>

    )
}
export default App