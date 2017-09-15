import * as mongoose from 'mongoose';
export declare const UserSchema: any;
export interface IUser {
    email?: string;
    password?: string;
}
export interface IUserDocument extends IUser, mongoose.Document {
}
export declare const User: any;
