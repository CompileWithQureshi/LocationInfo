import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import './App.css'

const App = () => {
    return (
        <div className='overflow'>
            <NavBar />
            <Hero img='./Rectangle 77.png' country="JAPAN" city='MOUNT Fuji' date='12 jan, 2021-24 jan,2021' info='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.' />
            <Hero img='./Rectangle 78.png' country="AUSTRALIA"
                city='Sydney Opera House'
                date='27 May, 2021 - 8 Jun, 2021' info='The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings' />
            <Hero img='./Rectangle 84.png' country="NORWAY" city='Geirangerfjord' date='01 Oct, 2021 - 18 Nov, 2021' info='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.' />
            <Hero img='./Rectangle 84.png' country="NORWAY" city='Geirangerfjord' date='01 Oct, 2021 - 18 Nov, 2021' info='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.' />

        </div>

    )
}
export default App