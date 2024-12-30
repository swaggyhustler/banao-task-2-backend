import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    'first_name': {
        type: String
    },
    'last_name': {
        type: String,
    },
    'password': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('User', userSchema);