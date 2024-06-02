const mongoose = require('mongoose')

// const connectionString ="mongodb+srv://anish8427singhchandel:842799@myntra-cluster.oo9kwdh.mongodb.net/myntra-DB?retryWrites=true&w=majority&appName=myntra-Cluster"

const connectDB=(url)=>{
    return mongoose.connect(url)
}

module.exports = {connectDB};