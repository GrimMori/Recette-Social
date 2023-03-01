import axios from 'axios'
import { CrearRecipe } from '../types/Recipe'



const baseRecipeUrl = 'http://localhost:4000/api/v1/recipes'

// ----------SHOULD ALL------------//

export const getRecipesRequest = async () => {
   return axios.get(baseRecipeUrl)
}

// ----------SHOULD ONE------------//
export const getRecipeRequest = async (id:any) =>{
   return await axios.get(baseRecipeUrl + `/recipe/${id}`)
}

// ----------CREATE RECETA------------//
const getSessionToken  =  ()=>{
   return sessionStorage.getItem("access_token");
}
export const createRecipe = async (createRecipe:CrearRecipe)=>{

   return await axios.post(baseRecipeUrl, createRecipe,{
      headers:{
         'Authorization':`Bearer ${getSessionToken()}`
      }
   })
}

// ----------PUT ALL------------//

export const updateRecipeRequest = async (id:any, newRecipe:any) =>{
   return await axios.put(baseRecipeUrl + `/recipe/${id}`, newRecipe)
}

// ----------DELETE ALL------------//

export const deleteRecipeRequest = async (id:any) =>{
   return await axios.delete(baseRecipeUrl + `/recipe/${id}`)
 }



