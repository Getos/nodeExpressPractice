import express from 'express'
import {
    getPost,
    getPosts,
    createPost
 } from '../controllers/postController.js';
const router = express.Router();


router.get('/',getPosts )
router.get('/:id', getPost)
router.post('/',createPost )

export default router