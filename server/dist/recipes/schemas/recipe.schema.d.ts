import mongoose, { Document, ObjectId } from 'mongoose';
export type RecipeDocument = Recipe & Document;
export declare class Recipe {
    title: string;
    description: string;
    author: ObjectId;
    ingredients: Array<ObjectId>;
    time: number;
    is_private: boolean;
    tags: Array<string>;
    score: number;
    views: number;
    comments: Comment[];
    photo: string;
}
export declare const RecipeSchema: mongoose.Schema<Recipe, mongoose.Model<Recipe, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Recipe>;
