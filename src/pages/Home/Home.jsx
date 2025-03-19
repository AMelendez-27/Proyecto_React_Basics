import './Home.css'
import GetCardBy from '../../components/GetCardBy/GetCardBy'
import GetSetHighestPriced from '../../components/GetSetHighestPriced/GetSetHighestPriced'
import GetCardCollection from '../../components/GetCardCollection/GetCardCollection'

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
         <GetCardBy filterType={'id'} filterData={'GG70'}/>
      </div>
      <div className='home-random-showcase'>
         {/* <GetSetHighestPriced set={'Prismatic Evolutions'} cardCuantity={17}/> */}
         <GetCardCollection filterType={'id'} collection={['swsh8-271', 'swsh7-218', 'swsh7-215', 'swsh11-180', 'swsh11-186', 'swsh12pt5gg-GG67', 'swsh12pt5gg-GG68', 'swsh12pt5gg-GG69', 'swsh12pt5gg-GG70', 'sv8-238', 'sv8-239', 'sv8-246', 'sv8pt5-161', 'sv8pt5-156', 'sv8pt5-144', 'sv8pt5-155', 'sv8pt5-146', 'sv8pt5-153', 'sv8pt5-149', 'sv8pt5-167', 'sv8pt5-147']}/>
      </div>
    </div>
  )
}

export default Home

