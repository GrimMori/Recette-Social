import { PipeTransform } from '@nestjs/common';
import mongoose from 'mongoose';
export declare class ParseObjectIdPipe implements PipeTransform<any, mongoose.Types.ObjectId> {
    transform(value: any): mongoose.Types.ObjectId;
}
