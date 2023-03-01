import mongoose, { Document, ObjectId } from 'mongoose';
export type MenuDocument = Menu & Document;
export declare class Menu {
    title: string;
    description: string;
    type: Array<string>;
    user: ObjectId;
    recipes: Array<ObjectId>;
    static title: string;
}
export declare const MenuSchema: mongoose.Schema<Menu, mongoose.Model<Menu, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Menu>;
