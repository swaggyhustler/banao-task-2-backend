import Post from '../Models/post.model.js';

const getPosts = async (req, res) => {
    
    try{
        const posts = await Post.find().sort({'createdAt': -1});
        return res.status(200).json({message: 'Posts fetched successfully', success: true, posts: posts})
    }catch(e){
        return res.status(500).json({message: 'Cannot fetch posts', success: false});
    }

}

const createPost = async (req, res) => {

    const {category, content, banner, title} = req.body;

    try{
        const newPost = new Post({category, content, banner, title});
        await newPost.save();
        return res.status(201).json({message: 'New Post Created', success: true, postID: newPost._id});
    }catch(e){
        return res.status(500).json({message: 'Cannot create post', success: false});
    }

}

const updatePost = async (req, res) => {

    const {category, content, banner, _id, title} = req.body;

    try{
        const updatedPost = await Post.findOneAndUpdate({_id}, {category, content, banner, title});
        return res.status(200).json({message: 'Post updated successfully', success: true});
    }catch(e){
        return res.status(500).json({message: 'Cannot update Post', success: false});
    }

}

const deletePost = async (req, res) => {

    const {id} = req.params;
    console.log(id);
    try{
        const deletedPost = await Post.findByIdAndDelete(id);
        if(!deletedPost)
            return res.status(404).json({message: 'Post not found', success: true});
        return res.status(200).json({message: 'Post deleted successfully', success: true});
    }catch(e){
        return res.status(500).json({message: 'Cannot delete Post', success: false});
    }

}

export {createPost, updatePost, deletePost, getPosts};