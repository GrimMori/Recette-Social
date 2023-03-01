import { ObjectId } from 'mongoose';
export declare class CreateCommentDto {
    readonly title: string;
    readonly stars: number;
    readonly comment: string;
    readonly user: ObjectId;
}
