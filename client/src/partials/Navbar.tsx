import { Link } from 'react-router-dom'
import RecetteDetail from '../pages/RecetteDetail'
import ProfileCard from './ProfileCard'
import RecetteCard from './RecetteCard'
import './styles/Navbar.css'

type Props = {}

export const Navbar = ({user}:any) => {
  return (
    <div className="navbar">
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
        <Link to={'/login/'}>
          login
          {/* <img src={require('../assets/fav.svg').default} alt="fav-logo" /> */}
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
        <li>
          
        </li>


      </ul>

      
      
    </div>
  )
}

export default Navbar;