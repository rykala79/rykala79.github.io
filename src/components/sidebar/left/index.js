import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoQ from '../../../assets/images/logo_Q.png'
import LogoQlb from '../../../assets/images/logo_qlb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faTwitter,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faHeartPulse,
  faPersonWalking,
  faShop
} from '@fortawesome/free-solid-svg-icons'

const LeftSidebar = () => (
  <div className="nav-bar-left">
    <Link className="logo" to="/">
      <img src={LogoQ} alt="logo" />
      <img className="logo-qlb" src={LogoQlb} alt="logoqlb" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/home">
        <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="zdrowie-link"
        to="/"
      >
        <FontAwesomeIcon icon={faHeartPulse} color="#4d4d4d" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="aktywnosc-link"
        to="/"
      >
        <FontAwesomeIcon icon={faPersonWalking} color="#4d4d4d" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="shop-link"
        to="/"
      >
        <FontAwesomeIcon icon={faShop} color="#4d4d4d" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
      </NavLink>
    </nav>
  </div>
)

export default LeftSidebar