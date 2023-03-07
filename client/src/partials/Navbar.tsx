import { Link } from 'react-router-dom'
import './styles/Navbar.css'

type Props = {
  loggedInUser: string | null;
}

const Navbar = (props: Props) => {
  const { loggedInUser } = props;
  return (
    <div className="navbar">
      {!loggedInUser &&
        <ul>
          <li>
            <Link to={'/social'}>
              <img src={require('../assets/home.svg').default} alt="home-logo" />
            </Link>
          </li>

          <li>
            <Link to={'/login'}>
              <img src={require('../assets/user.svg').default} alt="user-logo" />
            </Link>
          </li>

          <li>
            <Link to={'/recetteList'}>
              <img src={require('../assets/search.svg').default} alt="loupe-logo" />
            </Link>
          </li>
        </ul>
      }
      {loggedInUser &&
        <ul>
          <li>
            <Link to={'/social'}>
              <img src={require('../assets/home.svg').default} alt="home-logo" />
            </Link>
          </li>

          <li>
            <Link to={'/profile/63d9049bee15be130124a938'}>
              <img src={require('../assets/user.svg').default} alt="user-logo" />
            </Link>
          </li>

          <li>
            <Link to={'/recetteList'}>
              <img src={require('../assets/search.svg').default} alt="loupe-logo" />
            </Link>
          </li>

          <li>
            <Link to={'/recetteForm'}>
              <img src={require('../assets/add.svg').default} alt="add-logo" />
            </Link>
          </li>
        </ul>
      }
    </div>
  )
}

export default Navbar;