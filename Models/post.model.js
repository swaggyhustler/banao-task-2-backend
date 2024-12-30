import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    'category': {
        type: String
    },
    'views': {
        type: Number,
        default: 0
    },
    'title': {
        type: String
    },
    'content': {
        type: String
    },
    'banner': {
        type: String
    },
    'likes': {
        type: Number,
        default: 0
    }, 
    'comments': {
        type: Array
    }
},{timestamps: true});

export default mongoose.model('Post', PostSchema);