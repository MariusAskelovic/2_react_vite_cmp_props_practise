import './styles/App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import Portfolio from './components/Portfolio'

export const portfolioArr = [
  {
    id: '1',
    img: '/img/2.jpg',
    cardText: 'Colorful tiles'
  },
  {
    id: '2',
    img: '/img/4.png',
    cardText: 'Birdy'
  },
  {
    id: '3',
    img: '/img/5.png',
    cardText: 'Sneakers'
  },
  {
    id: '4',
    img: '/img/8.jpg',
    cardText: 'Zen'
  },
  {
    id: '5',
    img: '/img/9.jpg',
    cardText: 'Nature'
  },
  {
    id: '6',
    img: '/img/10.jpg',
    cardText: 'Game'
  },
]


function App() {
  return (
    <>
      <Header />
      {false && <Hero
        heroBgColor='tomato'
        heroText='Info hero'
        subtitleText='Info subtitle'
      />}
      <Portfolio />
    </>
  )
}

export default App
