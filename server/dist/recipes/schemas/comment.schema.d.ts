import { Document, ObjectId } from 'mongoose';
import mongoose from 'mongoose';
export type CommentDocument = Comment & Document;
export declare class Comment {
    title: string;
    stars: number;
    comment: string;
    user: ObjectId;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment>;
