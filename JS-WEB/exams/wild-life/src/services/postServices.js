const Post = require('../models/Post');



exports.getAll = () => Post.find().lean();

exports.getOne = (id) => Post.findById(id).populate('author').populate('votesOnPost').lean();

exports.create = (dataPost) => Post.create(dataPost);

exports.update = (id, post) => Post.findByIdAndUpdate(id, post);

exports.delete = (id) => Post.findByIdAndDelete(id);


exports.voteUp = async (postId, userId) => {
    const post = await Post.findById(postId).populate('votesOnPost');

    post.votesOnPost.push(userId);
    post.ratingOnPost += 1;

    return post.save();
};

exports.voteDown = async (postId, userId) => {
    const post = await Post.findById(postId).populate('votesOnPost');

    post.votesOnPost.push(userId);
    post.ratingOnPost -= 1;

    return post.save();
};