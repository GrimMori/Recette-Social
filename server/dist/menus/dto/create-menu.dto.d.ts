import { ObjectId } from 'mongoose';
import { Recipe } from 'src/recipes/interfaces/recipe.interface';
export declare class CreateMenuDto {
    title: string;
    description: string;
    category: Array<string>;
    user: ObjectId;
    recipes: Array<Recipe>;
}
