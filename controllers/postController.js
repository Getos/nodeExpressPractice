let posts = [
    { id: 1, title: 'test1' },
    { id: 2, title: 'test2' },
    { id: 3, title: 'test3' }
];

//@desc  Get all posts
//@route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
};

//@desc  Get single posts
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`post was not found`)
        error.status = 404;
        return next(error)
            
    }
    res.status(200).json(post);
};

//@desc  create new post
// @route POST /api/posts

export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };
    if (!newPost.title) {
        const error = new Error(`please enter a title`)
        error.status = 404;
        return next(error)
    }
    posts.push(newPost);
    res.status(201).json(posts);
};

//@desc  update new post
// @route   PUT /api/posts
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)
    if (!post) {
        const error = new Error(`post was not found`)
        error.status = 404;
        return next(error)
            
    }
    post.title = req.body.title;
    res.status(200).json(posts);
}

//@desc     delete post
// @route   DELETE /api/posts

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`post was not found`)
        error.status = 404;
        return next(error)
    }
    post = posts.filter((post) => post.id !== id)
    res.status(200).json(posts)
        
}