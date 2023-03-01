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
    _id: string;
    title: string;
    description: string;
    ingredients: string[];
    time: number;
    is_private: boolean;
    tags: string[];
    comments: string[];
}


  export type CrearRecipe = {
    _id:string;
    title: string;
    description: string;
    author:Author;
    time:string 
    tags: Array<string>;
   
  }
import React from "react";