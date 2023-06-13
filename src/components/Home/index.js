import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './logo/index'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['V', 'i', 'n', 'i', 'c', 'i', 'u', 's', '   ']
  const jobArray = ['D', 'e', 's', 'i', 'g', 'n']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Ola, <br /> Bem vindo <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>Design Grafico Freelancer</h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home
