import { useEffect, useState } from 'react'
import { getRecipesRequest } from '../api/recep.api'
import RecetteCard from '../partials/RecetteCard';
import RecetteDetail from './RecetteDetail';
import RecetteListPage from './RecetteList';


export type Recipe = {
  _id: string;
  title: string;
  description: string;
  author: any;
  ingredientes: string;
  comment: string;
}


function SocialPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    async function loadRecipes() {
      const response = await getRecipesRequest()
      setRecipes(response.data)
    }
    loadRecipes()
  }, [])


  return (
    <>
    <div className='titulo-social'>
      <h1 >Social</h1>
      <h5 className='social1'>Top 10, on the type of food you like</h5>
    </div>
      <div className='social'>
        {
          recipes.map(recipe => (
            <div >
              <h2 className='title-social'>{recipe.title}</h2>
              <img src={require('../assets/mock.png')} alt="mock image" />

              <RecetteCard recipes={recipe} />

            </div>
          ))
        }
        
      </div>
    </>
  )
}

export default SocialPage
