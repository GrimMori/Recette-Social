import { useEffect, useState } from 'react';
import { getRecipesRequest } from '../api/recep.api';
import RecipeCard from '../partials/RecipeCard';
import { Recipe } from '../types/Recipe';
import './styles/RecetteList.css'
function RecetteList() {
  const [recipes, setRecipe] = useState<Recipe[]>([])  
  useEffect(() => {
    async function loadRecipes() {
      const response = await getRecipesRequest()
      setRecipe(response.data)
    }
    loadRecipes()
  }, []);
  return (
    <div className="card-container">
      {recipes.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe._id} />
      ))}
    </div>
  )
}export default RecetteList