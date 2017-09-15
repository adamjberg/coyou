import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

export interface IUser {
    email?: string;
    password?: string;
}

export interface IUserDocument extends IUser, mongoose.Document {

}

export const User = mongoose.model<IUserDocument>("User", UserSchema);