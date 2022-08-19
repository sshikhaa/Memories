//start point of our server application

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
//now we can use all different methods on this app instance
dotenv.config();

app.use(bodyParser.json({ limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({ limit : "30mb" , extended : true}));
app.use(cors());

app.use('/posts' , postRoutes);//every route inside of the postRoutes is gonna start with /posts

app.get('/' , (req,res) => {
    res.send('Hello to memories API')
})

//const CONNECTION_URL = 'mongodb+srv://shikharai:shikharai123@cluster0.ef4th.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL , { useNewUrlParser : true , useUnifiedTopology : true })
    .then(() => app.listen(PORT , () => console.log(`Server running on port : ${PORT}`))) //if connection to the db is successful
    .catch((error) => console.log(error.message));

    //mongoose.set('useFindAndModify' , false);  