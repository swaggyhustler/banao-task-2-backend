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
    }
},{timestamps: true});

export default mongoose.model('Post', PostSchema);