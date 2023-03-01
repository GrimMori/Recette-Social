import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeRequest} from '../api/recep.api'

type Author = {
  username:string;
}

type Ingredient = {
  name:string;
  measure_unit:string;
}
type Comment = {
  title:string;
  statrs:number;
  comment:string;
}

export type Recipe = {
  _id:string;
  title: string;
  description: string;
  author:Author;
  time:string 
  tags: Array<any>;
  comments: Comment[];
  ingredients:Ingredient[] 
}


function RecetteDetail() {
  const [recipe, setRecipe] = useState <Recipe> ()

  const params = useParams ()
    // console.log(params)

  useEffect(() => {
    const loadRecipe = async ()=>{
      if(params.id){
        const recipe = await getRecipeRequest(params.id)
        console.log(recipe.data)
        setRecipe(recipe.data)
      }
    }
    loadRecipe()
    }, [])

  const newLocal = <div>
    <h3>Ingredientes</h3>
    {recipe?.ingredients.map((ingredient: Ingredient, index: number) => <div key={index}>
      <div className='ingrediente'>
      <p>{ingredient.name}</p>
      <p>{ingredient.measure_unit}</p>
      </div>
    </div>
    )}
  </div>
  return (
    <div>
      
          <div className='nav'>
              <img className='img' src={require('../assets/logo.svg')} alt="" />
          </div>
            <div>
              <h1 className='detail-recette'>Detail Recette</h1>
            </div>
          <div className='detail'>
            
          <div >
              <img className='imag-detail' src={require('../assets/mock.png')} alt="comida.png" />
          </div>
          <div className='titles'>
              <h1 key={recipe?._id}>
                      {recipe?.title}</h1>
              <p>{recipe?.tags}</p>
              <p>{recipe?.description}</p>
              <p>{recipe?.author.username}</p>
              <p>{recipe?.time}</p>
          </div>
          <div>      
              {recipe?.comments.map((comment:Comment, index:number)=>
              <div key={index}>
                    <p>{comment.title}</p>
                    <p>{comment.statrs}</p>
                    <p>{comment.comment}</p>
              </div>
            )}
          </div>
                    {newLocal}
          </div>
    </div>
  )
}

export default RecetteDetail
