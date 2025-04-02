import './Home.css';
import React from 'react';
import GetSetCards from '../../components/GetSetCards/GetSetCards';
import GetCardBy from '../../components/GetCardBy/GetCardby';
import Carrusel from '../../components/Carrusel/Carrusel';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-header'>
        <h1 className='home-title'>Welcome to the Pokemon Trading Card Game Library</h1>
        <h2 className='home-sub-title'>Explore the Pokemon TCG world</h2>
      </div>
      <div className='home-showcase'>
        <div className='hero'>
          <p className='hero-quote'>
            In this library you will find all the already released Pokemon TCG cards.<br />
            You will have the ability to browse through all the cards, search for specific cards, and explore the different sets that have been released, find all the information you need to know about the cards, including their name, type, rarity, price and more.
          </p>
          <GetCardBy filterType={'id'} filterData={'GG70'} />
        </div>
        <div className='home-random-showcase'>
          <Carrusel set={'Prismatic Evolutions'} order={'highestFirst'} cardCuantity={10} />
        </div>
      </div>
    </div>
  );
};

export default Home;

