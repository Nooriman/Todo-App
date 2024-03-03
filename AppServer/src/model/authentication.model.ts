import mongoose, {Document, Schema} from 'mongoose';

export interface AuthenticationSchema extends Document {
    email: string;
    password: string;
    role: number;
}

const authenticationSchema = new Schema<AuthenticationSchema>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    }
})

const AuthenticationModel = mongoose.model<AuthenticationSchema>('Auth', authenticationSchema, 'authentication');

export default AuthenticationModel;