import express from 'express'; 
import chatRouter from './chat_routes.js';
const mainRouter  = express.Router();


mainRouter.use('/chat', chatRouter);

export default mainRouter