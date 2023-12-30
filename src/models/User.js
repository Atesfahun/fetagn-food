import {Schema} from "mongoose"

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true, 
        validate: pass => {
            if (pass?.length || pass.length < 5) {
                new Error("Password must be at least 5 Characters")
                return false;
            }
        }}
}, {timmestamps: true});


export const User = models?.User || model('User', UserSchema)