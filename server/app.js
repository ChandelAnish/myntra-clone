const express = require('express')
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const { connectDB } = require('./DB/connectDB');
const {router} = require('./router/items')
require('dotenv').config();

app.use('/',router);



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => {
            console.log('server connected to PORT 5000 and DB')
        })
    } catch (error) {
        console.log("error occured : ",error)
    }
}
start();