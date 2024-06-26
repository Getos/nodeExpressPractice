import express from 'express'
import {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost
 } from '../controllers/postController.js';
const router = express.Router();


router.get('/',getPosts )
router.get('/:id', getPost)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id',deletePost)

export default router