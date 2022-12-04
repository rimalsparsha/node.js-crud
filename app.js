import express from 'express'
const app = express()
const port = process.env.PORT || '3000'



app.use(express.urlencoded({extended: false}))  //for create



// DATABASE
import connectDB from './db/conndb.js'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
connectDB(DATABASE_URL);




// ROUTER
import index from './routes/index.js';
app.use('/',index);

import add from './routes/add.js';
app.use('/add',add);




//ejs
app.set("view engine", "ejs")


// Static
import {join} from 'path'
app.use(express.static(join(process.cwd(), "public")))



//  Port Listen
app.listen(port,() =>{
    console.log(`server listenng at http://localhost:${port}`)
})