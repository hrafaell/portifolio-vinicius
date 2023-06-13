import './index.scss'
import logoMaior from '../../../assets/images/bannerPrincipal.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <a
        href="https://www.behance.net/visualvaro"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="solid-logo"
          src={logoMaior}
          alt="vinicius "
          style={{
            position: 'right',
          }}
        />
      </a>
    </div>
  )
}
export default Logo
