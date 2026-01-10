import express from 'express';
import { auth } from '../middlewares/auth.js';
import { getPulishedCreations, getUserCreations, toggleLikeCreations } from '../controllers/userController.js';
import { use } from 'react';

const userRouter = express.Router();

userRouter.get('/get-user-creations',auth, getUserCreations)
userRouter.get('/get-published-creations',auth,getPulishedCreations)
userRouter.post('/toggle-like-creations',auth,toggleLikeCreations)

export default userRouter;