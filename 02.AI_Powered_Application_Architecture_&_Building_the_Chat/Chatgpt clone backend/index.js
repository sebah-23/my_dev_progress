import 'dotenv/config';

import express from "express";
import db from './db/db.config.js'
import mainRouter from './src/api/chat/main_routes.js';
import { errorHandler } from './src/middleware/error_handler.js';

const app = express();
app.use(express.json());
app.use('/api', mainRouter);

app.use(errorHandler);
async function startServer(){
    try{
      const connection = await db.getConnection();
      connection.release();
  app.listen(8000,(err)=>{
    if(err){
      throw err;
    }
    console.log('server is runninng on port http;//lovalhost:8000');
    
  })
    }catch(err){
      console.log('enter starting server:',err);
      
    }
}
    startServer()  