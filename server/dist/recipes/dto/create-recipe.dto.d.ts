import { ObjectId } from 'mongoose';
export declare class CreateRecipeDto {
    title: string;
    description: string;
    author: ObjectId;
    ingredients: Array<ObjectId>;
    time: number;
    is_private: boolean;
    tags: Array<string>;
}
