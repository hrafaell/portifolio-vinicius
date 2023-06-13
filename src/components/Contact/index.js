import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useRef } from 'react'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmailMessage',
        'template_6w9nohn',
        refForm.current,
        '2tTObyZcNYsuAalJ4'
      )
      .then(
        () => {
          alert('Mensagem enviada, entrarei em contato em breve')
          window.location.reload(false)
        },
        () => {
          alert('Falha no envio da mensagem, Tente novamente!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 't', 'o']}
              idx={15}
            />
          </h1>
          <p>
            Olá, sou apaixonado no que faço e busco aprender todos os dias, seja
            participando de webinars de Design, abrindo os softwares diariamente
            para testar novas idéias, com o acompanhamento das tendências do
            Design e da Era Digital.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nome" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Assunto"
                    type="text"
                    name="assunto"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Mensagem" required />
                </li>

                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
