import './styles/App.css'
import Hero from './components/Hero'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Hero
        heroBgColor='blue'
        heroText='Info hero'
        subtitleText='Info subtitle'
      />
    </>
  )
}

export default App
