const mongoose = require('mongoose')

// const connectionString ="mongodb+srv://anish8427singhchandel:842799@myntra-cluster.oo9kwdh.mongodb.net/myntra-DB?retryWrites=true&w=majority&appName=myntra-Cluster"

// always use async and await  becuse it's internet Work Some times getting delay
const connectDB= async (url)=>{
    return await mongoose.connect(url)
}

module.exports = {connectDB};