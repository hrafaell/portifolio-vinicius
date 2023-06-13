import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoSubtitle from '../../assets/images/MEULOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faPaste,
  faPen,
  faSuitcase,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import {
  faBehance,
  faLinkedin,
  faSkype,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portifolio-link"
          to="/portifolio"
        >
          <FontAwesomeIcon icon={faPen} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/viniciusalvaro/"
          >
            <FontAwesomeIcon icon={faLinkedin} alt="linkedin" color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.behance.net/visualvaro"
          >
            <FontAwesomeIcon icon={faBehance} alt="" color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=5511966383580"
          >
            <FontAwesomeIcon icon={faWhatsapp} alt="" color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburguer-icon"
      />
    </div>
  )
}
export default Sidebar
