import './Home.css';
import React from 'react';
import GetSetCards from '../../components/GetSetCards/GetSetCards';
import GetCardBy from '../../components/GetCardBy/GetCardby';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home-title'>Welcome to the Pokemon Trading Card Game Library</h1>
      <h2 className='home-sub-title'>Explore the Pokemon TCG world</h2>
      <div className='home-showcase'>
        <p className='hero-quote'>
          In this library you will find all the already released Pokemon TCG cards.
          You will have the ability to browse through all the cards, search for specific cards, and explore the different sets that have been released.
          Here you will find all the information you need to know about the cards, including their name, type, rarity, price and more.
          You will also be able to see the cards in detail, including their artwork, attacks, and other information.
        </p>
        <p className='hero-end-quote'>
          We hope you enjoy your stay in our library and that you find all the information you need about the Pokemon TCG world.
        </p>
        <GetCardBy filterType={'id'} filterData={'GG70'} />
        <div className='home-random-showcase'>
        <GetSetCards set={'Prismatic Evolutions'} order={'highestFirst'} cardCuantity={11} />
        </div>
      </div>
    </div>
  );
};

export default Home;

