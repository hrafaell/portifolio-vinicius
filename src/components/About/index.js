import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import fotoLateral from '../../../src/assets/images/fotolateral.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={35}
            />
          </h1>
          <p>
            Olá, sou apaixonado no que faço e busco aprender todos os dias, seja
            participando de webinars de Design, abrindo os softwares diariamente
            para testar novas idéias, com o acompanhamento das tendências do
            Design e da Era Digital.
          </p>
          <p>
            Estou disponível para novos projetos, freelance, contratações,
            parcerias etc. Sou Técnico em Administração, com formação em cursos
            livres de software de vetorização e de tratamento de imagens pelo
            Senac. Atualmente sou bolsista em Design Gráfico (4º semestre) na
            FAM - Faculdade das Américas.
          </p>
        </div>
        <div className="foto">
          <img className="fotoLateral" src={fotoLateral} alt="vinicius " />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
