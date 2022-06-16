const postService = require('../services/postServices');

exports.isAuth = (req, res, next) => {
    if(req.user){
       return next();
    }

    res.redirect('/user/login');
}

exports.isUser = (req, res, next) => {
    if(req.user){
        res.redirect('/');
    }    
    return next();
}

exports.isOwner = async (req, res, next) => {

    const userId = req.user._id;
    const post = await postService.getOne(req.params.id)

    const isAuthor = userId == post.author._id;
    

    if(isAuthor) {
       return next();
    }

    res.redirect('/');
}