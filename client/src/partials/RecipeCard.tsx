import './styles/RecipeCard.css';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../types/Recipe';

type PropsType = {
    recipe: Recipe
}

function RecipeCard({ recipe }: PropsType) {
    const navigate = useNavigate()    
    return (
        <div className="card">
            <button onClick={() => navigate(`/RecetteDetail/${recipe._id}`)}>
                <img src={require('../assets/mock.png')} alt="mock image" />
                <h1>{recipe.title}</h1>
                <p>{recipe.time}min</p>
            </button>
        </div>
    )
}export default RecipeCard