import cors from 'cors';
import express from 'express';
import bodyparser from 'body-parser';
import mogoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config()
import router from './routes/routers.js';


const app=express();
app.use(cors());
app.use(bodyparser.json());




app.use('/',router);


mogoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(process.env.PORT,()=>console.log("server is running on port 5000")))
.catch((err)=>console.log(err));