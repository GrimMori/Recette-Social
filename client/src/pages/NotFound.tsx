import { Link } from 'react-router-dom';
import './styles/NotFound.css';

function NotFound() {
  return (
    <div className="container">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>      
      <div>
        <button className="button-primary">
          <Link to='/'>Home</Link>
        </button>        <button className="button-primary">
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </div>
  )
}export default NotFound