import './Home.css'
import GetCardby from '../../components/GetCardBy/GetCardby'
import GetRandomTCG from '../../components/GetRandomTCG/GetRandomTCG'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home-title'>Welcome to the Pokemon Trading Card Game Library</h1>
      <h2 className='home-sub-title'>Explore the Pokemon TCG world</h2>
      <div className='home-showcase'>
         <p className='hero-quote'>In this library you will find all the already released Pokemon TCG cards.
          You will have the hability to browse through all the cards, search for specific cards, and explore the different sets that have been released.
          Here you will find all the information you need to know about the cards, including their name, type, rarity, price and more.
          You will also be able to see the cards in detail, including their artwork, attacks, and other information.
         </p>
         <p className='hero-end-quote'>
         We hope you enjoy your stay in our library and that you find all the information you need about the Pokemon TCG world.
         </p>
         <GetCardby filterType={'id'} filterData={'GG70'}/>
      </div>
      <div className='home-random-showcase'>
         <GetRandomTCG />
      </div>
    </div>
  )
}

export default Home

